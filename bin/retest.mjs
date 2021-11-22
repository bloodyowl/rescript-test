#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { pathToFileURL } from "url";
import glob from "glob";

let args = process.argv.slice(2);
let options = {
  "--with-dom": "--with-dom",
};

let allowedSuffixes = [".bs.js", ".js", ".mjs", ".cjs"];

let firstFile = args.filter((item) => !options[item])[0];

let buildsOutOfSource =
  firstFile.startsWith("lib/") || firstFile.startsWith("./lib/");
let outputDirectoryRegExp = /^(\.\/)?lib\/(\w+?)\//;

let suffix = allowedSuffixes.find((suffix) => firstFile.endsWith(suffix));

let outputDirectoryPrefix;
if (buildsOutOfSource) {
  let match = firstFile.match(outputDirectoryRegExp);
  if (match) {
    outputDirectoryPrefix = "/lib/" + match[2];
  } else {
    outputDirectoryPrefix = "";
  }
} else {
  outputDirectoryPrefix = "";
}

if (suffix == null) {
  console.error("Unsupported file extension");
  process.exit(1);
}

let { autoBoot, runTests } = await import(
  `..${outputDirectoryPrefix}/src/Test${suffix}`
);

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

let globsOrNames = args.filter((item) => !options[item]);

if (globsOrNames.some((item) => item.includes("*"))) {
  globsOrNames = await Promise.all(
    globsOrNames.map(
      (globOrName) =>
        new Promise((resolve, reject) => {
          glob(globOrName, (err, files) => {
            if (err) {
              reject(err);
            } else {
              resolve(files);
            }
          });
        })
    )
  ).then((arrays) => [...new Set([].concat(...arrays))]);
}

let modules = globsOrNames.map(
  (file) => pathToFileURL(path.resolve(process.cwd(), file)).href
);

await Promise.all(modules.map((item) => import(item)));

runTests();
