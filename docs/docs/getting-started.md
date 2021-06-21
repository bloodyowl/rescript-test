---
slug: "/"
title: Getting started
sidebar_label: Getting started
---

# Getting started

ReScript Test is a lightweight test framework with:

- **A minimal API surface**: reduces the mental overhead
- **Built-in extensibility**: so that you can create your own building blocks
- **Native node.js & opt-in DOM testing**: to fit all your needs
- **Speed**: we don't embed anything fancy, it just makes your tests run fast
- **A clear output**: your test results are easy to read

<img width="1166" height="744" alt="Test output screenshot" src="https://user-images.githubusercontent.com/1688645/113517422-28ee7200-9580-11eb-9e84-4f9de3c75069.png" />

```js title="AsyncData_test.res"
test("AsyncData getExn", () => {
  throws(() => getExn(NotAsked))
  throws(() => getExn(Loading))
  doesNotThrow(() => {
    let _ = getExn(Done(1))
  })
})

test("AsyncData mapWithDefaultU", () => {
  intEqual(NotAsked->mapWithDefaultU(0, (. value) => value + 1), 0)
  intEqual(Loading->mapWithDefaultU(0, (. value) => value + 1), 0)
  intEqual(Done(1)->mapWithDefaultU(0, (. value) => value + 1), 2)
})

test("AsyncData mapWithDefault", () => {
  intEqual(NotAsked->mapWithDefault(0, value => value + 1), 0)
  intEqual(Loading->mapWithDefault(0, value => value + 1), 0)
  intEqual(Done(1)->mapWithDefault(0, value => value + 1), 2)
})

test("AsyncData mapU", () => {
  asyncDataEqual(NotAsked->mapU((. value) => value + 1), NotAsked)
  asyncDataEqual(Loading->mapU((. value) => value + 1), Loading)
  asyncDataEqual(Done(1)->mapU((. value) => value + 1), Done(2))
})
```

