---
title: Assertions
sidebar_label: Assertions
---

In the `Test` module, we provide very basic assertion material. 

The framework **doesn't handle comparisons for you**, you'll need to provide your comparator functions. The goal is to avoid expensive recursive comparisons as much as possible (while still letting you do them if necessary).

## assertion

Assertion is the basic building block, here's its signature:

```js
assertion(
  // comparison function, returns a boolean
  comparator,
  // the value you're testing
  a,
  // the value you're expecting
  b,
  // optional, gives a name in case of test failure
  ~operator: string=?,
  // optional, gives a message on the test line
  ~message: string=?,
)
```

Let's write a simple assertion:

```js
assertion(
  (a, b) => a === b,
  1,
  1,
  ~operator="Int equals",
  ~message="One equals one",
)
```

You can see how this can be a bit redundant. What we recommend is to create an `Assert.res` file containing the most common assertions:

```js title="Assert.res"
let intEqual = (~message=?, a: int, b: int) =>
  assertion(~message?, ~operator="Int equals", (a, b) => a === b, a, b)
```

And reuse them across your tests:

```js title="Add_test.res"
open Test
open Assert

test("Add", () => {
  intEquals(add(1, 1), 2)
  intEquals(~message="1 + 2 === 3", add(1, 2), 3)
})
```

## throws

```js title="TestForException_test.res"
test("Test with a function that's supposed to throw", () => {
  throws(() => {
    myFunction()
  })

  throws(() => {
    myFunction()
  }, ~message="myFunction throws")

  throws(
    () => myFunction(),
    ~message="myFunction throws",
    ~test=exn => {
      // test than exn is the one expected
    },
  )
})
```

## doesNotThrow

```js title="TestForException_test.res"
test("Test with a function that's not supposed to throw", () => {
  doesNotThrow(() => {
    myFunction()
  })

  doesNotThrow(() => {
    myFunction()
  }, ~message="myFunction doesn't throw")
})
```

## pass

When you simply need to validate than a certain code path is reached, asserting a `pass` is enough:

```js title="TestWithPass_test.res"
test("Test with pass", () => {
  myFunction(() => {
    pass()
  })
  myFunction(() => {
    pass(~message="Callback is reached", ())
  })
})
```

## fail

The other way around, when you want to assert that you don't reach a certain path:

```js title="TestWithFail_test.res"
test("Test with fail", () => {
  myFunction(() => {
    fail()
  })
  myFunction(() => {
    fail(~message="Callback is not reached", ())
  })
})
```

## todo

If you're in a hurry and want to remember you'll eventually need to write this test:

```js title="TestForLater_test.res"
test("Test with todo", () => {
  todo("Check that int overflows are handled")
})
```