const { PlaywrightCore } = require("./playwrightCore");
const fs = require("fs");
const Tesseract = require("tesseract.js");
const getColors = require("get-image-colors");

exports.UserFunctions = class UserFunctions {
  /**
   * Generates test-resource-files folder directory w.r.t current environment
   * @returns test-resource-files directory with concatenated source filename if given
   * @param { string } fileName - the source file name
   */
  static getTestResourceFilePath(fileName = "") {
    return require("path").join(
      __dirname,
      "..",
      "test-environment",
      "test-assets",
      "test-resource-files",
      fileName
    );
  }
  static getTestDataFilePath(fileName = "") {
    return require("path").join(
      __dirname,
      "..",
      "test-environment",
      "test-assets",
      "test-data-files",
      "server-manager",
      fileName
    );
  }
  /**
   * Generates a version 4 UUID using the uuid package and returns it as a string.
   * @return {string} - A randomly generated UUID in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is a hexadecimal digit and y is either 8, 9, A, or B.
   * @link https://www.npmjs.com/package/uuid
   */
  static generateUUIDV4() {
    return require("uuid").v4();
  }
  // This function is responsible for creating a generic alpha Numeric string of desired size
  static generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  static generateRandomEmail(email) {
    const uuid = this.generateUUIDV4();
    const emailParts = email.split("@");
    if (emailParts.length !== 2) {
      throw new Error("Invalid email format");
    }
    const randomEmail = `${emailParts[0]}+${uuid}@${emailParts[1]}`;
    return randomEmail;
  }
  /**
   * Reads the contents of a file at the specified file path using the fs.readFile() method and returns a Promise.
   * @param {string} filePath - The path to the file to be read.
   * @param {Object} [options={}] - Optional settings that can be passed to fs.readFile().
   * @return {Promise} - A Promise that resolves with the contents of the file as a Buffer or string (depending on the encoding specified in the options), or rejects with an error object if there's an error.
   * Note: Make sure the user running this script has the necessary permissions to read the file.
   */
  static readFile(filePath, options = {}) {
    return new Promise((resolve, reject) => {
      require("fs").readFile(filePath, options, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  /**
   * Writes data to a file at the specified file path using the fs.writeFile() method and returns a Promise.
   * @param {string} filePath - The path to the file to be written.
   * @param {string | Buffer | Uint8Array} dataToWrite - The data to be written to the file. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
   * @param {Object} [options={}] - Optional settings that can be passed to fs.writeFile().
   * @return {Promise} - A Promise that resolves with no value if the file is successfully written, or rejects with an error object if there's an error.
   * Note: Make sure the user running this script has the necessary permissions to write to the file.
   */
  static writeFile(filePath, dataToWrite, options = {}) {
    return new Promise((resolve, reject) => {
      require("fs").writeFile(filePath, dataToWrite, options, (err) => {
        if (err) {
          reject(err); // Reject the promise with the error object
        } else {
          resolve(); // Resolve the promise
        }
      });
    });
  }
  /**
   * Asynchronously deletes a file at the given file path using the fs.unlink() method.
   * @param {string} filePath - The path to the file to be deleted.
   * @return {void}
   * If the file is successfully deleted, a success message will be logged to the console.
   * If there is an error, an error message will be logged to the console.
   * Note: Make sure the user running this script has the necessary permissions to delete the file.
   */
  static deleteFile(filePath) {
    return new Promise((resolve, reject) => {
      require("fs").unlink(filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  /**
   *Asynchronously parses an XML string and returns the resulting JavaScript object.
   * @param {string} xmlString The XML string to parse.
   * @returns {Promise<object>} A Promise that resolves to the parsed JavaScript object.
   * If an error occurs during parsing, the Promise will be rejected with an Error object.
   */
  static xmlStringToObject(xmlString) {
    return new Promise((resolve, reject) => {
      require("xml2js")
        .Parser()
        .parseString(xmlString, (err, obj) => {
          if (err) {
            reject(err);
          } else {
            resolve(obj);
          }
        });
    });
  }
  /**
   * Converts a JavaScript object to an XML string using xml2js's Builder.
   * @param {object} jsObject The JavaScript object to convert.
   * @param {object} options The options to use when converting the object to XML.
   * @returns {Promise<string>} A Promise that resolves to the XML string.
   * If an error occurs during conversion, the Promise will be rejected with an Error object.
   */
  static objectToXmlString(xmlObject, options = {}) {
    return new Promise((resolve) => {
      const { Builder } = require("xml2js");
      const builder = new Builder(options);
      resolve(builder.buildObject(xmlObject));
    });
  }
  /**
   * Returns the current system time as a formatted string.
   * @param {string} formatString A string specifying the desired format of the output.
   * The format string can contain any combination of date/time format specifiers recognized by Moment.js,
   * such as "DD/MM/YYYY hh:mm:ss a" for a date/time string in the format "24/03/2023 09:37:22 AM".
   * @returns {string} A string representing the current system time formatted according to the provided format string.
   * Note that the returned time is based on the system clock of the computer running the function.
   * If the format string is invalid or if an error occurs during formatting, the function will throw an Error.
   */
  static getCurrentDateTime(formatString) {
    const moment = require("moment");
    return moment().format(formatString);
  }
  static getCurrentTimeStamp() {
    return Date.now();
  }
  static async createNewBrowserInstance() {
    const browser = await PlaywrightCore.chromiumLaunch();
    const context = await PlaywrightCore.newBrowserContext(browser);
    const page = await PlaywrightCore.newPage(context);
    return page;
  }

  static async generateName() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let namePrefix = "";
    for (let i = 0; i < 10; i++) {
      namePrefix += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return namePrefix;
  }

  static async getCanvasBackgroundColor(page, xDim = 50, yDim = 50) {
    const color = await page.evaluate(
      ({ xDim, yDim }) => {
        const canvas = document.querySelector("canvas");
        if (!canvas) return "Canvas not found";

        const context = canvas.getContext("2d");
        const imageData = context.getImageData(xDim, yDim, 1, 1).data;
        const [r, g, b, a] = imageData;

        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;
        return hex;
      },
      { xDim, yDim }
    );

    return color;
  }

  static async getCanvasValidations(page, path, num1 = null, num2 = null) {
    const canvas = await page.locator("canvas");
    const dataUrl = await canvas.evaluate((canvas) => {
      return canvas.toDataURL();
    });
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
    fs.writeFileSync(`${path}canvas.png`, base64Data, "base64");
    const {
      data: { text },
    } = await Tesseract.recognize(`${path}canvas.png`, `eng`);

    let isValid = false;

    if (num1 && num2) {
      const num1Valid = await text.includes(num1);
      const num2Valid = await text.includes(num2);
      isValid = await (num1Valid && num2Valid);
    } else {
      const num1Valid = await text.includes(num1);
      isValid = await num1Valid;
    }

    return await isValid;
  }

  static async imageTextValidation(imageElement, path, match) {
    await imageElement.screenshot({ path: `${path}canvas.png` });
    const {
      data: { text },
    } = await Tesseract.recognize(`${path}canvas.png`, `eng`);
    return text;
  }

  static async getAllColorsFromCanvas(page, path) {
    const canvas = await page.locator("canvas");
    const dataUrl = await canvas.evaluate((canvas) => {
      return canvas.toDataURL();
    });
    const base64Data = await dataUrl.replace(/^data:image\/png;base64,/, "");
    await fs.writeFileSync(`${path}canvas.png`, base64Data, "base64");
    const colors = await getColors(`${path}canvas.png`);
    const hexColors = colors.map((color) => color.hex());
    console.log("Colors detected in the canvas:", hexColors);
    return hexColors;
  }

  static async getAllColorsFromImage(imageElement, path) {
    await imageElement.screenshot({ path: `${path}canvas.png` });
    // await fs.writeFileSync(`${path}canvas.png`, base64Data, "base64");
    const colors = await getColors(`${path}canvas.png`);
    const hexColors = colors.map((color) => color.hex());
    console.log("Colors detected in the canvas:", hexColors);
    return hexColors;
  }

  static async isShadeOfRed(hex) {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);
    return red > green && red > blue;
  }
};
