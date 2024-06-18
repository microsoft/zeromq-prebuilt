// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function fixWhitespace(file) {
  const contents = fs.readFileSync(file).toString();
  fs.writeFileSync(file, contents.replace(/\r\n/g, "\n"));
}

const { platform } = require("os");
if (platform() === "win32") {
  const fs = require("fs");
  const { platform } = require("os");
  const path = require("path");

  fixWhitespace(path.join(__dirname, "zeromq.js.patch"));
  fixWhitespace(path.join(__dirname, "libzmq.patch"));
}
