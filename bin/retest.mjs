#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { pathToFileURL } from "url";

let args = process.argv.slice(2);
let options = {
  "--with-dom": "--with-dom",
};

let allowedSuffixes = [".bs.js", ".js", ".mjs", ".cjs"];

let firstFile = args.filter((item) => !options[item])[0];

let suffix = allowedSuffixes.find((suffix) => firstFile.endsWith(suffix));

if (suffix == null) {
  console.error("Unsupported file extension");
  process.exit(1);
}

let { autoBoot, runTests } = await import(`../src/Test${suffix}`);

autoBoot.contents = false;

if (args.includes(options["--with-dom"])) {
  var jsdom = new JSDOM("<!DOCTYPE html>");
  Object.defineProperties(
    globalThis,
    Object.fromEntries(
      Object.entries(Object.getOwnPropertyDescriptors(jsdom.window)).filter(
        ([key, _value]) => !globalThis.hasOwnProperty(key)
      )
    )
  );
  globalThis.jsdom = jsdom;
}

if (fs.existsSync(path.join(process.cwd(), "retest.env.js"))) {
  await import(pathToFileURL(path.join(process.cwd(), "retest.env.js")).href);
}

let modules = args
  .filter((item) => !options[item])
  .map((file) => pathToFileURL(path.resolve(process.cwd(), file)).href);

await Promise.all(modules.map((item) => import(item)));

runTests();
