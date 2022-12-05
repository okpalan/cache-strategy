// A store for storing a string of information
// delimited by ; and =.
// Example: "key1=value1;key2=value2;key3=value3"
const cache = {
    data: new Map(),
    timers: new Map(),
    set: (k, v, ttl) => {
      if (cache.timers.has(k)) {
        clearTimeout(cache.timers.get(k))
      }
      cache.timers.set(k, setTimeout(() => cache.delete(k), ttl))
      cache.data.set(k, v)
    },
    get: k => cache.data.get(k),
    has: k => cache.data.has(k),
    delete: k => {
      if (cache.timers.has(k)) {
        clearTimeout(cache.timers.get(k))
      }
      cache.timers.delete(k)
      return cache.data.delete(k)
    },
    clear: () => {
      cache.data.clear()
      for (const v of cache.timers.values()) {
        clearTimeout(v)
      }
      cache.timers.clear()
    }
  }

export default Cache;
