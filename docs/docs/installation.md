---
title: Installation
sidebar_label: Installation
---

# Installation

First, let's install ReScript Test using your favorite package manager.

```console title="Console"
$ yarn add --dev rescript-test
```

Then, let's adapt our ReScript compiler config file (`bsconfig.json`).

In `sources`:

```diff title="bsconfig.json"
 "sources": [
   { "dir": "src", "subdirs": true },
+  { "dir": "tests", "subdirs": true, "type": "dev" }
 ]
```

:::note
Notice the `type: "dev"`, it makes the ReScript compiler only compile those files when your project is the one you're working on (meaning it won't compile those files when your project is installed as a dependency).
::: 

In `bs-dev-dependencies`:

```diff title="bsconfig.json"
 "bs-dev-dependencies": [
+  "rescript-test"
 ]
```

Everything's configured now!

Now let's add a `test` command in our `package.json`:

```diff title="package.json"
 "scripts": {
+  "test": "retest tests/*.mjs"
 }
```