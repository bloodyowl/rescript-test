open ReScriptJs.Js
open Test

let intEqual = (~message=?, a: int, b: int) =>
  assertion(~message?, ~operator="intEqual", (a, b) => a === b, a, b)

let stringEqual = (~message=?, a: string, b: string) =>
  assertion(~message?, ~operator="stringEqual", (a, b) => a == b, a, b)

test("Equals", () => {
  let a = 1
  let b = 1
  intEqual(a, b)
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

let userEq = (a, b) => a.id === b.id
let userEqual = (~message=?, a: user, b: user) =>
  assertion(~message?, ~operator="userEqual", userEq, a, b)

test("DeepEquals", () => {
  let a = {username: "user", id: "a"}
  let b = {username: "user", id: "a"}
  stringEqual(a.username, b.username)
  userEqual(a, b)
})

testAsync("Async", cb => {
  let _ = setTimeout(() => {
    pass()
    cb()
  }, 100)
})
