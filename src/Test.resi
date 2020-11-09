let assertion: (~message: string=?, ~operator: string=?, ('a, 'b) => bool, 'a, 'b) => unit
let equal: (~message: string=?, 'a, 'a) => unit
let deepEqual: (~message: string=?, 'a, 'a) => unit
let pass: (~message: string=?, unit) => unit
let fail: (~message: string=?, unit) => unit
let todo: string => unit
let doesNotThrow: (~message: string=?, unit => unit) => unit
let throws: (~message: string=?, ~test: exn => bool=?, unit => unit) => unit

let testAsync: (
  ~setup: unit => unit=?,
  ~teardown: unit => unit=?,
  string,
  ~timeout: int=?,
  (unit => unit) => unit,
) => unit

let test: (~setup: unit => unit=?, ~teardown: unit => unit=?, string, unit => unit) => unit
