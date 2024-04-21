open RescriptCore
open Test

let equal = (~message=?, a, b) => assertion(~message?, ~operator="equal", (a, b) => a === b, a, b)

let deepEqual = (~message=?, a, b) =>
  assertion(~message?, ~operator="deepEqual", (a, b) => a == b, a, b)

testAsync("Async", cb => {
  let _ = setTimeout(() => {
    equal(1, 2)
    cb()
  }, 100)
})

test("Equals", () => {
  let a = 1
  let b = 2

  equal(a, b)
})

type user = {username: string, id: string}
test("DeepEquals", () => {
  let a = {username: "user", id: "a"}
  let b = {username: "user2", id: "a"}
  equal(a.username, b.username)
  deepEqual(a, b)
})
