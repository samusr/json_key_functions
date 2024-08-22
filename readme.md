# JSON Key Hyphen to Underscore Converter

## Description

This Node.js script reads a JSON file, replaces all hyphens (`-`) with underscores (`_`) in the keys of the JSON object, and saves the result to a new file. The script is useful for adapting JSON key names to conform to certain naming conventions in projects.

## Features

- Replaces hyphens (`-`) with underscores (`_`) in the keys of JSON objects.
- Processes deeply nested JSON objects and arrays.
- Saves the modified JSON to a new file.
- Handles errors in reading, writing, and parsing JSON.

## Requirements

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [NPM](https://www.npmjs.com/) (installed with Node.js)

## Installation

1. Clone the repository or download the code.
   ```bash
   git clone <repository-url>
   ```

2. Install any necessary dependencies (none in this case, as `fs` is built into Node.js).

   ```bash
   npm install
   ```

## Usage

1. Place your JSON file in the project root and ensure it is named `data.json`.

2. Run the script to process the JSON file and replace hyphens in the keys.

   ```bash
   node <script-filename.js>
   ```

3. The modified JSON file will be saved as `data_cleaned.json` in the project root.

### Example

Given a `data.json` file with the following content:

```json
{
  "items": [
    { "message-id": 123, "profile": { "user-id": 456 } },
    { "message-id": 789, "profile": { "user-id": 101 } }
  ]
}
```

The resulting `data_cleaned.json` will look like this:

```json
{
  "items": [
    { "message_id": 123, "profile": { "user_id": 456 } },
    { "message_id": 789, "profile": { "user_id": 101 } }
  ]
}
```

## Project Structure

```
project-root/
│
├── data.json                 # Original JSON file
├── data_cleaned.json          # Processed JSON file
├── <script-filename.js>       # Node.js script
└── README.md                  # This README file
```

## Customization

If you want to change the input or output file names, modify the following lines in the script:

```javascript
let file_path = 'data.json'; // Change this to your input file name
fs.writeFile("data_cleaned.json", ...); // Change this to your output file name
```

## Common Issues

### File Read/Write Errors

Ensure that the `data.json` file exists in the project root. Additionally, verify that you have the necessary file permissions to read and write files.

### Parsing Errors

If the `data.json` file is not valid JSON, the script will fail. Make sure the file is properly formatted as JSON.

## Contributions

Feel free to open an issue or submit a pull request if you encounter any bugs or have ideas for improving this script.

## License

This project is licensed under the MIT License. For more details, see the `LICENSE` file.
