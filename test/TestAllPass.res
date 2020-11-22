open ReScriptJs.Js
open Test

let equal = (~message=?, a, b) => assertion(~message?, ~operator="equal", (a, b) => a === b, a, b)

let deepEqual = (~message=?, a, b) =>
  assertion(~message?, ~operator="deepEqual", (a, b) => a == b, a, b)

testAsync("Async", cb => {
  let _ = setTimeout(() => {
    pass()
    cb()
  }, 100)
})

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
})

type user = {username: string, id: string}
test("DeepEquals", () => {
  let a = {username: "user", id: "a"}
  let b = {username: "user", id: "a"}
  equal(a.username, b.username)
  deepEqual(a, b)

  test("DeepEquals subtest", () => {
    let a = {username: "user", id: "a"}
    let b = {username: "user", id: "a"}
    equal(a.username, b.username)
    deepEqual(a, b)
  })
})

let testWithSetup = testWith(~setup=() => ref(0))

testWithSetup("Setup", someRef => {
  incr(someRef)
  equal(someRef.contents, 1)
})

testWithSetup("Setup", someRef => {
  equal(someRef.contents, 0)
  incr(someRef)
  incr(someRef)
  equal(someRef.contents, 2)
})

let testWithSetupAndTeardown = testWith(~setup=() => ref(0), ~teardown=someRef => someRef := 0)

testWithSetupAndTeardown("Setup & teardown", someRef => {
  incr(someRef)
  equal(someRef.contents, 1)
})

testWithSetupAndTeardown("Setup & teardown 2", someRef => {
  equal(someRef.contents, 0)
  incr(someRef)
  incr(someRef)
  equal(someRef.contents, 2)
})

let testAsyncWithSetupAndTeardown = testAsyncWith(
  ~setup=() => ref(0),
  ~teardown=someRef => someRef := 0,
)

testAsyncWithSetupAndTeardown("Async setup & teardown", (someRef, callback) => {
  incr(someRef)
  equal(someRef.contents, 1)
  callback()
})

testAsyncWithSetupAndTeardown("Async setup & teardown 2", (someRef, callback) => {
  equal(someRef.contents, 0)
  incr(someRef)
  incr(someRef)
  equal(someRef.contents, 2)
  callback()
})

let stringMapEqual = (~message=?, a, b) =>
  assertion(
    ~message?,
    ~operator="stringMapEqual",
    (a, b) => Belt.Map.String.eq(a, b, (a, b) => a === b),
    a,
    b,
  )

test("Cutom operator Equals", () => {
  stringMapEqual(Belt.Map.String.fromArray([("a", 1)]), Belt.Map.String.fromArray([("a", 1)]))
})
