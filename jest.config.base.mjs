// @ts-check

import path from 'node:path';
import fs from 'node:fs';

/** @type {import('jest').Config} */
export const config = {
  testRegex: '^(?!.*?type).*(\\.(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'node',
};

const rootDirectory = (await import('node:url')).fileURLToPath(
  new URL('.', import.meta.url),
);

export const generateFromPath = (
  configPath,
) => {
  const relativePath = path.relative(
    rootDirectory,
    configPath,
  );

  const rootRelativePath = path.relative(
    configPath,
    rootDirectory,
  );

  // @ts-ignore
  const { name } = JSON.parse(
    fs.readFileSync(
      path.resolve(configPath, 'package.json'),
      'utf8',
    ),
  );

  const packageConfig = {
    ...config,
    roots: [
      `<rootDir>/${relativePath}`,
    ],
    modulePaths: [
      `<rootDir>/${relativePath}/src`,
    ],
    displayName: name,
    rootDir: rootRelativePath,
  };

  return packageConfig;
};
