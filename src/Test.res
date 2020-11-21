open ReScriptJs.Js

@bs.val external exit: int => unit = "process.exit"
@bs.val external process: Undefined.t<{..}> = "process"

let exit = code => {
  if typeof(process) != #undefined {
    exit(code)
  } else {
    Console.log(`# Exit code: ${code->Int.toString}`)
  }
}

let red = text => typeof(process) != #undefined ? `\u001b[31m${text}\u001b[0m` : text
let green = text => typeof(process) != #undefined ? `\u001b[32m${text}\u001b[0m` : text
let pink = text => typeof(process) != #undefined ? `\u001b[34m${text}\u001b[0m` : text
let yellow = text => typeof(process) != #undefined ? `\u001b[33m${text}\u001b[0m` : text
let grey = text => typeof(process) != #undefined ? `\u001b[2m${text}\u001b[0m` : text

let passText = green(`PASS`)
let failText = red(`FAIL`)
let todoText = yellow(`TODO`)

let running = ref(false)

let testCounter = ref(0)
let testPassedCounter = ref(0)
let testFailedCounter = ref(0)
let testTimeoutCounter = ref(0)

let testText = (name, index) => {
  let index = index->Int.toString
  let total = testCounter.contents->Int.toString
  Console.log(`${index}/${total}: ${name}`)
}

let passCounter = ref(0)
let failCounter = ref(0)

let total = () => (passCounter.contents + failCounter.contents)->Int.toString

let queue = ref(Promise.resolve())

let formatMessage = message =>
  switch message {
  | Some(message) => ` - ${message}`
  | None => grey(` - No message`)
  }

let assertion = (
  type left right,
  ~message=?,
  ~operator=?,
  compare: (left, right) => bool,
  a: left,
  b: right,
) => {
  if compare(a, b) {
    incr(passCounter)
    Console.log(`  ${passText}${formatMessage(message)}`)
  } else {
    incr(failCounter)
    Console.log(`  ${failText}${formatMessage(message)}`)
    Console.log(`    ---`)
    switch operator {
    | Some(operator) => Console.log(`    ${pink("operator")}: ${operator}`)
    | None => ()
    }
    Console.log2(`    ${pink("left")}: `, a)
    Console.log2(`    ${pink("right")}:`, b)
    Console.log(`    ...`)
  }
}

let doesNotThrow = (~message=?, func: unit => unit) => {
  try {
    func()
    incr(passCounter)
    Console.log(`  ${passText}${formatMessage(message)}`)
  } catch {
  | exn =>
    incr(failCounter)
    Console.log(`  ${failText}${formatMessage(message)}`)
    Console.log(`    ---`)
    Console.log(`    ${pink("operator")}: doesNotThrow`)
    Console.log2(`    ${pink("error")}:`, exn)
    Console.log(`    ...`)
  }
}

let throws = (~message=?, ~test: option<exn => bool>=?, func: unit => unit) => {
  try {
    func()
    incr(failCounter)
    Console.log(`  ${failText}${formatMessage(message)}`)
  } catch {
  | exn =>
    switch test {
    | Some(test) when test(exn) == false =>
      incr(failCounter)
      Console.log(`  ${failText}${formatMessage(message)}`)
    | _ =>
      incr(passCounter)
      Console.log(`  ${passText}${formatMessage(message)}`)
    }
  }
}

let todo = message => {
  Console.log(`  ${todoText}${formatMessage(Some(message))}`)
}

let pass = (~message=?, ()) => {
  incr(passCounter)
  Console.log(`  ${passText}${formatMessage(message)}`)
}

let fail = (~message=?, ()) => {
  incr(failCounter)
  Console.log(`  ${failText}${formatMessage(message)}`)
  Console.log(`    ---`)
  Console.log(`    ${pink("operator")}: fail`)
  Console.log(`    ...`)
}

let testAsync = (~setup=?, ~teardown=?, name, ~timeout=5_000, func) => {
  if running.contents {
    Console.error(
      red(`# Cannot add testAsync("${name}", ...), tests must be defined at the top level`),
    )
  } else {
    incr(testCounter)
    let index = testCounter.contents
    queue := queue.contents->Promise.flatThen(() => {
        let failedAtStart = failCounter.contents
        Promise.make((resolve, _reject) => {
          testText(name, index)
          try {
            let timeoutId = setTimeout(() => {
              let message = Some(`Timed out after ${timeout->Int.toString}ms`)
              incr(testTimeoutCounter)
              Console.log(`  ${failText}${formatMessage(message)}`)
              resolve()
            }, timeout)
            switch setup {
            | Some(setup) => setup()
            | None => ()
            }
            func(() => {
              clearTimeout(timeoutId)
              resolve()
              if failCounter.contents > failedAtStart {
                incr(testFailedCounter)
              } else {
                incr(testPassedCounter)
              }
              try {
                switch teardown {
                | Some(teardown) => teardown()
                | None => ()
                }
              } catch {
              | exn =>
                Console.error(exn)
                exit(1)
              }
            })
          } catch {
          | exn =>
            Console.error(exn)
            exit(1)
          }
        })
      })
  }
}

let test = (~setup=?, ~teardown=?, name, func) => {
  if running.contents {
    Console.error(red(`# Cannot add test("${name}", ...), tests must be defined at the top level`))
  } else {
    incr(testCounter)
    let index = testCounter.contents
    queue := queue.contents->Promise.flatThen(() => {
        let failedAtStart = failCounter.contents

        Promise.make((resolve, _reject) => {
          testText(name, index)
          try {
            switch setup {
            | Some(setup) => setup()
            | None => ()
            }
            func()
            switch teardown {
            | Some(teardown) => teardown()
            | None => ()
            }
          } catch {
          | exn =>
            Console.error(exn)
            exit(1)
          }
          if failCounter.contents > failedAtStart {
            incr(testFailedCounter)
          } else {
            incr(testPassedCounter)
          }
          resolve()
        })
      })
  }
}

setTimeout(() => {
  running := true

  queue := queue.contents->Promise.finally(() => {
      Console.log(``)
      Console.log(
        grey(`# Ran ${testCounter.contents->Belt.Int.toString} tests (${total()} assertions)`),
      )
      Console.log(grey(`# ${testPassedCounter.contents->Belt.Int.toString} passed`))
      Console.log(
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
}, 0)
