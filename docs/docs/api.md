---
title: API
sidebar_label: API
---

# API

To make the API available in scope, open the `Test` module:

```js title="Add_test.res"
open Test
```

## Basics

### test

The `test` function identifies a test suite. You give it a name to easily find it in your output, and a function calling the assertions.

```js title="Add_test.res"
test("Add", () => {
  // Your assertions
})
```

:::note
Nesting `test` suites is not allowed.
:::

### testAsync

`testAsync` works the same way, but gives the function an extra parameter, a `done` function to call when your test is done. 

```js title="AsyncWorkflow_test.res"
testAsync("Async workflow", (done) => {
  // Your async assertions
  done()
})
```

#### Timeout

You can pass a `timeout` option that will make the tests fail if `done` hasn't been called by then:

```js title="AsyncWorkflow_test.res"
testAsync("Async workflow", ~timeout=10, (done) => {
  // Your async assertions
  done()
})
```

#### Planned assertions

If you want to make sure that your assertion count is right, you can pass the expected assertion count to the `done` function using a `planned` parameter. If your assertion count is different than what's planned, it'll make the suite fail.

```js title="AsyncWorkflow_test.res"
testAsync("Async workflow", ~timeout=10, (done) => {
  // Your async assertions
  done(~planned=3)
})
```

## Setup and teardown

**Setup** & **Teardown** can be crucial in testing if you want to avoid having side effects from certain tests leak to other ones, or if you have logic that you want to share (e.g. setup React containers).

The API we provide is pretty similar to `test` & `testAsync`, they're nearly the same functions but with extra tweaks:

- A `setup` function that lets your return a `value` (see it as a test context)
- A `teardown` function that takes the `value` and lets you act on it
- `value` that's passed to your test function body

### testWith

```js title="SetupAndTeardown_test.res"
let setup = () => {
  let element = document["createElement"](. "div")
  document["body"]["appendChild"](. element)
  element
}

let teardown = element => {
  element["remove"](. )
}

testWith(~setup, ~teardown, "Setup & teardown", (element) => {
  // Your assertions that use `element`
})
```

For a good reusability, we can take advantage of auto-currying:

```js title="TestUtils.res"
let setup = () => {
  let element = document["createElement"](. "div")
  document["body"]["appendChild"](. element)
  element
}

let teardown = element => {
  element["remove"](. )
}

let testWithElement = testWith(~setup, ~teardown)
```

And reuse it across your tests!

```js title="SomeDOMTests_test.res"
testWithElement("Some DOM logic", (element) => {
  // Your assertions that use `element`
})
```

### testAsyncWith

Pretty much the same story there, expect we have the extra `done` argument

```js title="TestUtils.res"
let setup = () => {
  let element = document["createElement"](. "div")
  document["body"]["appendChild"](. element)
  element
}

let teardown = element => {
  element["remove"](. )
}

let testWithElement = testAsyncWith(~setup, ~teardown)
```

And there we go:

```js title="SomeDOMTests_test.res"
testAsyncWithElement("Some DOM logic", (element, done) => {
  // Your async assertions that use `element`
  done()
})
```