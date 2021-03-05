let assertion: (~message: string=?, ~operator: string=?, ('a, 'b) => bool, 'a, 'b) => unit
let pass: (~message: string=?, unit) => unit
let fail: (~message: string=?, unit) => unit
let todo: string => unit
let doesNotThrow: (~message: string=?, unit => unit) => unit
let throws: (~message: string=?, ~test: exn => bool=?, unit => unit) => unit

let testAsync: (string, ~timeout: int=?, ((~planned: int=?, unit) => unit) => unit) => unit

let test: (string, unit => unit) => unit

let testAsyncWith: (
  ~setup: unit => 'a,
  ~teardown: 'a => unit=?,
  string,
  ~timeout: int=?,
  ('a, (~planned: int=?, unit) => unit) => unit,
) => unit

let testWith: (~setup: unit => 'a, ~teardown: 'a => unit=?, string, 'a => unit) => unit
