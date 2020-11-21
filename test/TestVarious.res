open ReScriptJs.Js
open Belt
open Test

let equal = (~message=?, a, b) => assertion(~message?, ~operator="equal", (a, b) => a === b, a, b)

let deepEqual = (~message=?, a, b) =>
  assertion(~message?, ~operator="deepEqual", (a, b) => a == b, a, b)

let equalAsString = (~message=?, a, b) =>
  assertion(~message?, ~operator="equal", (a, b) => a->Int.toString === b, a, b)

testAsync("Async", cb => {
  let _ = setTimeout(() => {
    equal(1, 1)
    equalAsString(1, "1")
    cb()
  }, 100)
})

testAsync("Async", ~timeout=10, _cb => ())

test("Equals", () => {
  let a = 1
  let b = 1

  equal(a, b)
})

test("Should fail", () => {
  fail()
})

// test("Throws", () => {
//   Error.raise(Error.make("Helloooo"))
// })

test("Should throw", () => {
  throws(() => {
    Error.raise(Error.make("Helloooo"))
  })
  throws(
    ~message=`Should not be a JS error`,
    ~test=error => error->Error.fromException->Option.isNone,
    () => {
      Error.raise(Error.make("Helloooo"))
    },
  )
})

test("Should not throw", () => {
  doesNotThrow(() => ())
})

type user = {username: string, id: string}
test("DeepEquals", () => {
  let a = {username: "user", id: "a"}
  let b = {username: "user", id: "a"}
  equal(a.username, b.username)
  equal(a.username, b.id)
  equal(Undefined.make(1), Undefined.empty)
  deepEqual(a, b)
  todo("Check that user is ok")
})
