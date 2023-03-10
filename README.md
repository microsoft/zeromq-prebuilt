# ripgrep-prebuilt

[![Build Status](https://dev.azure.com/monacotools/Monaco/_apis/build/status/Extensions/ms-toolsai/zeromq-prebuilt?branchName=main)](https://dev.azure.com/monacotools/Monaco/_build/latest?definitionId=466&branchName=main)

Builds [zeromq](https://github.com/zeromq/zeromq.js) on Azure Pipelines for multiple platforms, used by the [Jupyter Extension for VS Code](https://github.com/microsoft/vscode-jupyter).

## Details

Reads `config.json` to determine which repo to clone and which tag to check out. If the build was triggered by a tag, each job will package the build outputs and publish them as pipeline artifacts, and the last job will upload those artifacts to the Github release. The Github release is consumed by the [Jupyter Extension](https://github.com/microsoft/vscode-jupyter).

* zeromq.js is patched, see [patch.js](https://github.com/microsoft/zeromq-prebuilt/blob/main/patch.js) file for details
* As and when a new release of zeromq.js has been published, we will need to
	* Update the [config.json](https://github.com/microsoft/zeromq-prebuilt/blob/main/config.json) file to point to the new upstream release
    * Update the patches accordingly
    * Update the build pipeline (if necessary, e.g. if there are new dependencies that need to be installed)

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
