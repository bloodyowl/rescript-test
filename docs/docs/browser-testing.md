---
title: Browser testing
sidebar_label: Browser testing
---

# Testing in a real browser

ReScript Test has a very simple API that can easily run in a real browser.

```js title="BrowserTests.res"
include MyComponent__Test
include MyOtherComponent__Test
```

Import the compiled file in an HTML page and you'll see your test output in the console!

If you want to see for yourself, check out your console! 😀

import "./Browser.mjs"