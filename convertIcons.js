/**
 * https://github.com/NotNinja/convert-svg/tree/master/packages/convert-svg-to-png
 */

const { createConverter } = require("convert-svg-to-png");
const fs = require("fs");
const util = require("util");
const srouceFolder = "./resources/icons";

const readdir = util.promisify(fs.readdir);

async function convertSvgFiles(dirPath) {
  const converter = createConverter();

  try {
    const filePaths = await readdir(dirPath);

    for (const filePath of filePaths) {
      console.log(filePath);
      const ext = filePath.substr(filePath.lastIndexOf(".") + 1);
      if (ext === "svg")
        await converter.convertFile(srouceFolder + "/" + filePath, {
          height: 200
        });
    }
  } finally {
    await converter.destroy();
  }
}

convertSvgFiles(srouceFolder);
