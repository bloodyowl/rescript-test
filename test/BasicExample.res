open ReScriptJs.Js
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

testAsync("Async", cb => {
  let _ = setTimeout(() => {
    pass()
    cb()
  }, 100)
})
