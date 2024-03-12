export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const called = weakMap.get(endpoint);
  if (called) {
    if (called >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, called + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
