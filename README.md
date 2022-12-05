# Cache Strategy
Cahce Strategy are a set of algorithms that used to store
and retrieve cache data.It is optimzied to aviod cahce misses
via picking the most effective startergy.


In most senerios,Cache Strategy reduces the caching problem into a single string that is searchable using regex matching such as the `javascript cookie storage`.It aims to 
be compitable and used with `.map` files.

# Cache Miss
A cache miss occurs when a requested data is not found in the cache.This is the most common scenario in a cache system.

# Disclaimer:
NOTE: Use this library with caution,if you are in need of caching
data in your application,consider using a hash table instead.

# Installation
```bash
npm install cache-strategy
```

```javascript
var cache = new Cache('LRU', 10); 
// or 
// var cache = new Cache('LRU', 10, 1000);
// or var cache = new Cache('LRU',10,(v,i,a)=>{return v;});

cache.put('key', 'value');
cache.get('key');
```

# API
## Cache
### new Cache(strategy, size)
Create a new cache instance.

* `strategy` - The cache strategy, can be:
1. `LRU` - Least Recently Used
2. `LFU` - Least Frequently Used
3. `LIFO` - Last In First Out
4. `FIFO` - First In First Out
5. `LFD` - Leas Foward Distance
6. `MRU` - Most Recently Used
7. Your own custom strategy.
   



