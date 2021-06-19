---
title: CLI
sidebar_label: CLI
---

# CLI

ReScript Test comes with a little `retest` CLI to help your run your tests.

```console title="Console"
$ retest tests/*.mjs
```

Note here that we're using the `mjs` extension. This gives the runner infer the information about which extension you've specified in your compiler. It can be either of the following:

- `.bs.js`
- `.js`
- `.mjs`
- `.cjs`

## Testing a single file

If you're focused on a particular component, you can pass a single test to the CLI:

```console title="Console"
$ retest tests/MyFile_test.mjs
```

## ES6 modules

ReScript Test works out of the box with either ES6 modules (starting with **Node 14**, unfortunately) or CommonJS. 

:::warning
You'll need to use the `.mjs` extension when using ES6 modules. 

This one's on Node 🤷‍♂️.
:::

## Recursive directory testing

If your files are stored in deeper directories, specify the depth that way:

```console title="Console"
$ retest tests/*.mjs test/**/*.mjs
```

### Enable DOM testing in the CLI

The CLI comes with a single option, `--with-dom`, that enables you to opt-in to testing with … a DOM 😄. It activates **[JSDOM](https://github.com/jsdom/jsdom)** under the hood. JSDOM doesn't come with all the APIs (for instance, it doesn't handle layout), but it's generally enough for testing component logic.

```console title="Console"
$ retest --with-dom tests/*.mjs
```