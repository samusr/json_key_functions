# JSON Key Hyphen to Underscore Converter

## Description

This Node.js script reads JSON files, replaces all hyphens (`-`) with underscores (`_`) in the keys of the JSON objects, and saves the converted JSON files into a separate directory. The script processes deeply nested objects and arrays. This project is useful for adapting JSON key names to conform to certain naming conventions in projects.

## Features

- Replaces hyphens (`-`) with underscores (`_`) in JSON keys.
- Processes deeply nested JSON objects and arrays.
- Reads multiple JSON files from a directory and outputs the converted files to another directory.
- Handles errors in reading, writing, and parsing JSON files.

## Requirements

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [NPM](https://www.npmjs.com/) (installed with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samusr/json_key_functions.git
   ```

2. Navigate to the project directory:

   ```bash
   cd json_key_functions
   ```

3. Install any necessary dependencies:

   ```bash
   npm install
   ```

## Usage

1. Place your JSON files in the `json_files` directory.

2. Run the script to process the JSON files and replace hyphens in the keys:

   ```bash
   npm start
   ```

3. The converted JSON files will be saved to the `json_files_converted` directory.

### Example

Given a `data.json` file in the `json_files` directory with the following content:

```json
{
  "items": [
    {
      "message-id": 123,
      "profile": {
        "first-name": "John",
        "last-name": "Doe"
      }
    },
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    }
  ]
}
```

The resulting `data.json` file in the `json_files_converted` directory will look like this:

```json
{
  "items": [
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    },
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    }
  ]
}
```

## Project Structure

```
project-root/
│
├── json_files/                    # Input folder with JSON files
│   ├── file1.json
│   ├── file2.json
│   └── ...
├── json_files_converted/           # Output folder for converted files
├── jsonKeyConverter.js             # Class to handle JSON key conversion
├── index.js                        # Main entry point to read, convert, and save files
├── __tests__/                      # Folder for Jest tests
│   └── jsonKeyConverter.test.js    # Jest test for JsonKeyConverter
├── package.json                    # NPM package metadata and scripts
└── README.md                       # This README file
```

## Scripts

- **start**: Runs the script to process JSON files (`npm start`).
- **test**: Runs the Jest test suite to ensure the converter works correctly (`npm test`).

## Testing

This project uses Jest for testing. To verify the JSON converter works correctly, run:

```bash
npm test
```

### Example Test

The test checks that the JSON converter correctly replaces hyphens with underscores in the keys of an input JSON object.

#### Sample Input for the Test:

```json
{
  "items": [
    {
      "message-id": 123,
      "profile": {
        "first-name": "John",
        "last-name": "Doe"
      }
    },
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    }
  ]
}
```

#### Expected Output for the Test:

```json
{
  "items": [
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    },
    {
      "message_id": 123,
      "profile": {
        "first_name": "John",
        "last_name": "Doe"
      }
    }
  ]
}
```

If the test passes, the converter is functioning as expected.

## Customization

If you want to change the input or output directories, you can modify the following lines in `index.js`:

```javascript
const inputDir = path.join(__dirname, 'json_files');  // Change this to your input directory
const outputDir = path.join(__dirname, 'json_files_converted');  // Change this to your output directory
```

## Contributions

Feel free to open an issue or submit a pull request if you encounter any bugs or have ideas for improving this script.

## License

This project is licensed under the MIT License. For more details, see the `LICENSE` file.
