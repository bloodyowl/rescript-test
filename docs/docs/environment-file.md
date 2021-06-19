---
title: Environment file
sidebar_label: Environment file
---

# Environment file

Sometimes you'll need to make some values available in the global scope for your tests (e.g. some DOM functionality that JSDOM doesn't handle, some stuff you add using webpack…).

For those needs, you can add `retest.env.js` in your project root directory:

```js title="retest.env.js"
// Translation function
global.__ = (string) => string;

// localStorage
let storage = {};
let localStorage = {
  setItem: (key, value) => (storage[key] = value),
  getItem: (key) => (storage.hasOwnProperty(key) ? storage[key] : null),
  removeItem: (key) => delete storage[key],
  clear: () => (storage = {}),
};

Object.defineProperty(global, "localStorage", { value: localStorage });
Object.defineProperty(window, "localStorage", { value: localStorage });
```

:::warning
When testing with DOM, be careful to set your properies on **both** `window` & `global`, as sometimes they're accessed as properties instead of variables.
:::