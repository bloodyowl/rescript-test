# ReScriptTest

> A lightweight test framework for ReScript

## Installation

Run the following in your console:

```console
$ yarn add --dev rescript-test
```

Then add `rescript-test` to your `bsconfig.json`'s `bs-dev-dependencies`:

```diff
 {
   "bs-dev-dependencies": [
+    "rescript-test",
   ]
 }
```

## Usage

```console
$ # All tests
$ retest test/**/*.bs.js
$ # Single file
$ retest test/MyTest.bs.js
```

## Basics

```rescript
open Test

test("Equals", () => {
  let a = 1
  let b = 1
  equal(a, b)
})

let isCharCode = (a, b) => {
  a->String.charCodeAt(0) === b
}

test("Custom comparator", () => {
  let a = "a"

  assertion(~message="Char code should match", ~operator="isCharCode", isCharCode, a, 97.0)
  assertion(~message="Char code should match", ~operator="isCharCode", isCharCode, a, 98.0)
})

type user = {username: string, id: string}
test("DeepEquals", () => {
  let a = {username: "user", id: "a"}
  let b = {username: "user", id: "a"}
  equal(a.username, b.username)
  deepEqual(a, b)
})
```

Outputs:

```sh
1/4: Equals
  PASS - No message
2/4: Custom comparator
  PASS - Char code should match
  FAIL - Char code should match
    ---
    operator: isCharCode
    left:  a
    right: 98
    ...
3/4: DeepEquals
  PASS - No message
  PASS - No message
4/4: Async
  PASS - No message

# Ran 4 tests (6 assertions)
# 3 passed
# 1 failed
```

## API

### Tests

- `test(~setup=?, ~teardown=?, name, body)`
- `testAsync(~setup=?, ~teardown=?, name, body)`

### Operators

- `equal(a, b, ~message: string=?)`
- `deepEqual(a, b, ~message: string=?)`
- `throws(func, ~message: string=?, ~test: exn => bool=?)`
- `doesNotThrow(func, ~message: string=?)`
- `assertion(comparator, a, b, ~operator: string=?, ~message: string=?)`
- `pass()`
- `fail()`
- `todo(string)`
