#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { pathToFileURL } from "url";

let suffix = ".js";

if (fs.existsSync(path.join(process.cwd(), "bsconfig.json"))) {
  let bsconfig = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "bsconfig.json"), "utf8")
  );
  suffix = bsconfig.suffix || ".js";
}

let { autoBoot, runTests } = await import(`../src/Test${suffix}`);

let args = process.argv.slice(2);

autoBoot.contents = false;

let options = {
  "--with-dom": "--with-dom",
};

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
