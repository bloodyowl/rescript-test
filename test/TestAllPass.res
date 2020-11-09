open ReScriptJs.Js
open Test

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
  assertion(~message="Char code should match", ~operator="isCharCode", isCharCode, a, 98.0)
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

let someRef = ref(0)

let testWithSetupAndTeardown = test(~setup=() => someRef := 0, ~teardown=() => someRef := 0)

testWithSetupAndTeardown("Setup & teardown", () => {
  incr(someRef)
  equal(someRef.contents, 1)
})

testWithSetupAndTeardown("Setup & teardown 2", () => {
  equal(someRef.contents, 0)
  incr(someRef)
  incr(someRef)
  equal(someRef.contents, 2)
})
