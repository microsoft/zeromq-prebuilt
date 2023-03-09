// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const fs = require("fs");
const path = require("path");
const sourceFolder = path.join(__dirname, "..", "zeromq.js");

[
  {
    file: path.join(sourceFolder, "binding.gyp"),
    searchText: '                "<!@(pkg-config libsodium --libs)",',
    replacement: "",
  },
  {
    file: path.join(sourceFolder, "script", "build.ts"),
    searchText:
      'const cmake_configure = `cmake -S "${src_dir}" -B ./build ${build_options} -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE} -DCMAKE_INSTALL_PREFIX="${libzmq_install_prefix}" -DCMAKE_INSTALL_LIBDIR=lib -DBUILD_STATIC=ON -DBUILD_TESTS=OFF -DBUILD_SHARED=OFF -DWITH_DOCS=OFF -DWITH_LIBSODIUM=ON -DWITH_LIBSODIUM_STATIC=ON`',
    replacement:
      'const cmake_configure = `cmake -S "${src_dir}" -B ./build ${build_options} -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE} -DCMAKE_INSTALL_PREFIX="${libzmq_install_prefix}" -DCMAKE_INSTALL_LIBDIR=lib -DBUILD_STATIC=ON -DBUILD_TESTS=OFF -DBUILD_SHARED=OFF -DWITH_DOCS=OFF -DWITH_LIBSODIUM=OFF`',
  },
  {
    file: path.join(sourceFolder, "package.json"),
    searchText: '"node-addon-api": "^5.0.0",',
    replacement: '"node-addon-api": "^6.0.0",',
  },
].forEach(({ file, searchText, replacement }) => {
  const contents = fs.readFileSync(file).toString();
  if (contents.includes(searchText)) {
    console.log(`Patching ${file}...`);
    fs.writeFileSync(file, contents.replace(searchText, replacement));
  } else {
    throw new Error(
      `Unable to update as there are changes in the file '${file}'`
    );
  }
});
