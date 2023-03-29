// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const platform = require('os').platform;

if (platform === 'win32') {
  const fs = require("fs");
  const { platform } = require("os");
  const path = require("path");

  const file = path.join(__dirname, 'patch.patch');
  const contents = fs.readFileSync(file).toString();
  fs.writeFileSync(file, contents.replace(/\r\n/g, '\n'));
}