import { glob } from 'glob';

import package_ from './package.json' assert { type: 'json' };

const rootDirectory = (await import('node:url')).fileURLToPath(
  new URL('.', import.meta.url),
);

const projectGlob = 'jest.config.{js,cjs,mjs}';
const projects = package_.workspaces.map(
  (workspace) => {
    const testGlob = `${workspace}/${projectGlob}`;
    const [config] = glob.sync(testGlob, { cwd: rootDirectory });
    if (config) {
      return `<rootDir>/${config}`;
    }
    return undefined;
  },
).filter(Boolean);

const coverageCollection = package_.workspaces
  .filter((it) => it.startsWith('packages'))
  .map(
    (workspace) => `<rootDir>/${workspace}/src/**/!(*.css|*.stories|*type.spec).{ts,tsx}`,
  );

const config = {
  projects,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: coverageCollection,
  moduleDirectories: [
    'node_modules',
  ],
};

export default config;
