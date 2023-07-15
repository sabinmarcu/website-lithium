type LazyImport = () => Promise<void>;

const cache = new Set<LazyImport>();
export function lazyRender(importer: LazyImport) {
  return async () => {
    if (!cache.has(importer)) {
      cache.add(importer);
      await importer();
    }
  };
}

const queue = new Set<LazyImport>();
export function lazy(importer: LazyImport) {
  queue.add(importer);
}

export async function runLazy() {
  const toLoad = [...queue];
  await Promise.all(
    toLoad.map(async (importer) => {
      queue.delete(importer);
      return importer();
    }),
  );
}
