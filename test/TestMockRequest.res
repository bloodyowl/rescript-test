open Test

let resultEqual = (~message=?, a, b) =>
  assertion(~message?, ~operator="equal", (a, b) => Belt.Result.eq(a, b, (a, b) => a == b), a, b)

testAsync("Mock HTTP requests", callback => {
  http((req, res) => {
    switch req["url"] {
    | "http://localhost/foo" => res["status"](200)["end"]("Hello!")
    | "http://localhost/bar" => res["status"](202)["end"]("World!")
    | _ => res["status"](404)["end"]("")
    }
  })
  Future.all2((
    Request.make(~url="http://localhost/foo", ~responseType=Text, ()),
    Request.make(~url="http://localhost/bar", ~responseType=Text, ()),
  ))->Future.get(((a, b)) => {
    resultEqual(a, Ok({response: Some("Hello!"), status: 200, ok: true}))
    resultEqual(b, Ok({response: Some("World!"), status: 200, ok: true}))
    callback()
  })
})

type response = {ok: int}

testAsync("Mock HTTP requests", callback => {
  http((req, res) => {
    switch req["url"] {
    | "http://localhost/foo" => res["status"](200)["end"](`{"ok": 1}`)
    | "http://localhost/bar" => res["status"](200)["end"](`{"ok": 2}`)
    | _ => res["status"](404)["end"]("")
    }
  })
  Future.all2((
    Request.make(
      ~url="http://localhost/foo",
      ~responseType=(JsonAsAny: Request.responseType<response>),
      (),
    ),
    Request.make(
      ~url="http://localhost/bar",
      ~responseType=(JsonAsAny: Request.responseType<response>),
      (),
    ),
  ))->Future.get(((a, b)) => {
    resultEqual(a, Ok({response: Some({ok: 1}), status: 200, ok: true}))
    resultEqual(b, Ok({response: Some({ok: 2}), status: 404, ok: false}))
    callback()
  })
})
