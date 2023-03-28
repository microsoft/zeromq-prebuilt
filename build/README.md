## Publishing

Create a tag locally and push it to the remote. The build pipeline will automatically publish the artifacts to the Github release.
E.g. the remote tag `v6.0.0-beta.16` will be used to clone the zeromq.js repo and build the binaries, and the artifacts will be published to the Github release `v6.0.0-beta.16.1` or `v6.0.0-beta.16.2`.
