// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { platform } = require("os");
if (platform() === "win32") {
  const fs = require("fs");
  const { platform } = require("os");
  const path = require("path");

  function fixWhitespace(fileName) {
    const file = path.join(__dirname, fileName);
    const contents = fs.readFileSync(file).toString();
    fs.writeFileSync(file, contents.replace(/\r\n/g, "\n"));
  }

  fixWhitespace("zeromq.js.patch");
  fixWhitespace("libzmq.patch");
}
