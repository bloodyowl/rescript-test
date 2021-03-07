import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import { autoBoot, runTests } from "../src/Test.mjs";
import { pathToFileURL } from "url";

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
