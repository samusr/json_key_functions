const JsonKeyConverter = require('./jsonKeyConverter');
const path = require('path');
const fs = require('fs');

// Define input and output directories
const inputDir = path.join(__dirname, 'json_files');
const outputDir = path.join(__dirname, 'json_files_converted');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Create an instance of the JsonKeyConverter
const converter = new JsonKeyConverter(inputDir, outputDir);

// Convert all files in the input directory
converter.convertFiles();
