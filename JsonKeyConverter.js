const fs = require('fs');
const path = require('path');

class JsonKeyConverter {
  constructor(inputDir, outputDir) {
    this.inputDir = inputDir;
    this.outputDir = outputDir;
  }

  replaceHyphensKeys(json_object) {
    if (typeof json_object !== 'object' || json_object === null) {
      return json_object; // Return if it's not an object
    }

    // Handle arrays separately
    if (Array.isArray(json_object)) {
      return json_object.map(item => this.replaceHyphensKeys(item));
    }

    // Handle objects
    return Object.keys(json_object).reduce((acc, key) => {
      const newKey = key.replace(/-/g, '_');
      acc[newKey] = this.replaceHyphensKeys(json_object[key]); // Recurse for nested objects
      return acc;
    }, {});
  }

  readJsonFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(`Error reading or parsing the file: ${filePath}`, err);
      return null;
    }
  }

  writeJsonFile(filePath, data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`File has been written to: ${filePath}`);
    } catch (err) {
      console.error(`Error writing the file: ${filePath}`, err);
    }
  }

  convertFiles() {
    const files = fs.readdirSync(this.inputDir);

    files.forEach(file => {
      const filePath = path.join(this.inputDir, file);
      const jsonData = this.readJsonFile(filePath);

      if (jsonData) {
        const jsonDataConverted = this.replaceHyphensKeys(jsonData);
        const outputFilePath = path.join(this.outputDir, file);
        this.writeJsonFile(outputFilePath, jsonDataConverted);
      }
    });
  }
}

module.exports = JsonKeyConverter;