@val external exit: int => unit = "process.exit"
@val external process: Js.Undefined.t<{..}> = "process"

let exit = code => {
  if Js.typeof(process) != "undefined" {
    exit(code)
  } else {
    Js.Console.log(`# Exit code: ${code->Js.Int.toString}`)
  }
}

let red = text => Js.typeof(process) != "undefined" ? `\u001b[31m${text}\u001b[0m` : text
let green = text => Js.typeof(process) != "undefined" ? `\u001b[32m${text}\u001b[0m` : text
let pink = text => Js.typeof(process) != "undefined" ? `\u001b[34m${text}\u001b[0m` : text
let yellow = text => Js.typeof(process) != "undefined" ? `\u001b[33m${text}\u001b[0m` : text
let grey = text => Js.typeof(process) != "undefined" ? `\u001b[2m${text}\u001b[0m` : text

let passText = green(`PASS`)
let failText = red(`FAIL`)
let todoText = yellow(`TODO`)

let running = ref(false)

let testCounter = ref(0)
let testPassedCounter = ref(0)
let testFailedCounter = ref(0)
let testTimeoutCounter = ref(0)

let testText = (name, index) => {
  let index = index->Js.Int.toString
  let total = testCounter.contents->Js.Int.toString
  Js.Console.log(`${index}/${total}: ${name}`)
}

let passCounter = ref(0)
let failCounter = ref(0)

let total = () => (passCounter.contents + failCounter.contents)->Js.Int.toString

let queue = ref(list{})

let startRunningTests = onEnd => {
  let tests = queue.contents->Belt.List.reverse
  let rec runNextTest = tests => {
    switch tests {
    | list{test, ...rest} => test(() => runNextTest(rest))
    | list{} => onEnd()->ignore
    }
  }
  runNextTest(tests)
}

let registerTest = test => {
  queue.contents = list{test, ...queue.contents}
}

let formatMessage = message =>
  switch message {
  | Some(message) => ` - ${message}`
  | None => grey(` - No message`)
  }

let assertion = (~message=?, ~operator=?, compare, a, b) => {
  if compare(a, b) {
    incr(passCounter)
    Js.Console.log(`  ${passText}${formatMessage(message)}`)
  } else {
    incr(failCounter)
    Js.Console.log(`  ${failText}${formatMessage(message)}`)
    Js.Console.log(`    ---`)
    switch operator {
    | Some(operator) => Js.Console.log(`    ${pink("operator")}: ${operator}`)
    | None => ()
    }
    Js.Console.log2(`    ${pink("left")}: `, a)
    Js.Console.log2(`    ${pink("right")}:`, b)
    Js.Console.log(`    ...`)
  }
}

let doesNotThrow = (~message=?, func: unit => unit) => {
  try {
    func()
    incr(passCounter)
    Js.Console.log(`  ${passText}${formatMessage(message)}`)
  } catch {
  | exn =>
    incr(failCounter)
    Js.Console.log(`  ${failText}${formatMessage(message)}`)
    Js.Console.log(`    ---`)
    Js.Console.log(`    ${pink("operator")}: doesNotThrow`)
    Js.Console.log2(`    ${pink("error")}:`, exn)
    Js.Console.log(`    ...`)
  }
}

let throws = (~message=?, ~test: option<exn => bool>=?, func: unit => unit) => {
  try {
    func()
    incr(failCounter)
    Js.Console.log(`  ${failText}${formatMessage(message)}`)
  } catch {
  | exn =>
    switch test {
    | Some(test) if test(exn) == false =>
      incr(failCounter)
      Js.Console.log(`  ${failText}${formatMessage(message)}`)
    | _ =>
      incr(passCounter)
      Js.Console.log(`  ${passText}${formatMessage(message)}`)
    }
  }
}

let todo = message => {
  Js.Console.log(`  ${todoText}${formatMessage(Some(message))}`)
}

let pass = (~message=?, ()) => {
  incr(passCounter)
  Js.Console.log(`  ${passText}${formatMessage(message)}`)
}

let fail = (~message=?, ()) => {
  incr(failCounter)
  Js.Console.log(`  ${failText}${formatMessage(message)}`)
  Js.Console.log(`    ---`)
  Js.Console.log(`    ${pink("operator")}: fail`)
  Js.Console.log(`    ...`)
}

let testAsync = (name, ~timeout=5_000, func) => {
  if running.contents {
    Js.Console.error(
      red(`# Cannot add testAsync("${name}", ...), tests must be defined at the top level`),
    )
  } else {
    incr(testCounter)
    let index = testCounter.contents
    registerTest(resolve => {
      let failedAtStart = failCounter.contents
      let passedAtStart = passCounter.contents
      testText(name, index)
      try {
        let timeoutId = Js.Global.setTimeout(() => {
          let message = Some(`Timed out after ${timeout->Js.Int.toString}ms`)
          incr(testTimeoutCounter)
          Js.Console.log(`  ${failText}${formatMessage(message)}`)
          resolve()
        }, timeout)
        func((~planned=?, ()) => {
          switch planned {
          | Some(planned) =>
            assertion(
              ~message="Correct assertion count",
              ~operator="planned",
              (a, b) => a == b,
              planned,
              passCounter.contents + failCounter.contents - (passedAtStart + failedAtStart),
            )
          | None => ()
          }
          Js.Global.clearTimeout(timeoutId)
          if failCounter.contents > failedAtStart {
            incr(testFailedCounter)
          } else {
            incr(testPassedCounter)
          }
          resolve()
        })
      } catch {
      | exn =>
        Js.Console.error(exn)
        exit(1)
      }
    })
  }
}

let testAsyncWith = (~setup, ~teardown=?, name, ~timeout=?, func) => {
  testAsync(name, ~timeout?, callback => {
    let value = setup()
    func(value, (~planned=?, ()) => {
      try {
        switch teardown {
        | Some(teardown) => teardown(value)
        | None => ()
        }
      } catch {
      | exn =>
        Js.Console.error(exn)
        exit(1)
      }
      callback(~planned?, ())
    })
  })
}

let createTestAsyncWith = (~setup, ~teardown=?) => (name, ~timeout=?, func) =>
  testAsyncWith(~setup, ~teardown?, name, ~timeout?, func)

let test = (name, func) => {
  if running.contents {
    Js.Console.error(
      red(`# Cannot add test("${name}", ...), tests must be defined at the top level`),
    )
  } else {
    incr(testCounter)
    let index = testCounter.contents
    registerTest(resolve => {
      let failedAtStart = failCounter.contents

      testText(name, index)
      try {
        func()
      } catch {
      | exn =>
        Js.Console.error(exn)
        exit(1)
      }
      if failCounter.contents > failedAtStart {
        incr(testFailedCounter)
      } else {
        incr(testPassedCounter)
      }
      resolve()
    })
  }
}

let testWith = (~setup, ~teardown=?, name, func) => {
  test(name, () => {
    let value = setup()
    func(value)
    switch teardown {
    | Some(teardown) => teardown(value)
    | None => ()
    }
  })
}

let createTestWith = (~setup, ~teardown=?) => (name, func) =>
  testWith(~setup, ~teardown?, name, func)

let autoBoot = ref(true)

let runTests = () => {
  running := true

  startRunningTests(() => {
    Js.Console.log(``)
    Js.Console.log(
      grey(`# Ran ${testCounter.contents->Belt.Int.toString} tests (${total()} assertions)`),
    )
    Js.Console.log(grey(`# ${testPassedCounter.contents->Belt.Int.toString} passed`))
    Js.Console.log(
      grey(
        `# ${(testFailedCounter.contents + testTimeoutCounter.contents)
            ->Belt.Int.toString} failed${testTimeoutCounter.contents > 0
            ? ` (${testTimeoutCounter.contents->Belt.Int.toString} timed out)`
            : ``}`,
      ),
    )

    if testFailedCounter.contents + testTimeoutCounter.contents > 0 {
      exit(1)
    } else {
      exit(0)
    }
  })
}

let _ = Js.Global.setTimeout(() => {
  if autoBoot.contents {
    runTests()
  }
}, 0)
