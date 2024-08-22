const fs = require('fs');

function replaceHyphensKeys(json_object) {
    if (typeof json_object !== 'object' || json_object === null) {
        // Log when non-object values are encountered
        console.log(`Non-object encountered: ${json_object}`);
        return json_object; // Return if it's not an object
    }

    // Handle arrays separately
    if (Array.isArray(json_object)) {
        console.log(`Processing array: ${JSON.stringify(json_object)}`);
        return json_object.map(item => replaceHyphensKeys(item));
    }

    // Handle objects
    console.log(`Processing object: ${JSON.stringify(json_object)}`);
    return Object.keys(json_object).reduce((acc, key) => {
        const newKey = key.replace(/-/g, '_');
        console.log(`Replacing key '${key}' with '${newKey}'`);
        acc[newKey] = replaceHyphensKeys(json_object[key]); // Recurse for nested objects
        return acc;
    }, {});
}

function readJsonFile(file_path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(file_path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing the file:', err);
        return null;
    }
}

// Read the JSON file
let file_path = 'data.json';
let json_data = readJsonFile(file_path);

if (json_data) {
    // Replace hyphens in keys
    let json_data_cleaned = replaceHyphensKeys(json_data);

    // Write the cleaned JSON data to a new file
    fs.writeFile("data_cleaned.json", JSON.stringify(json_data_cleaned, null, 2), function (err) {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            console.log('File has been written successfully.');
        }
    });
    console.log(JSON.stringify(json_data_cleaned, null, 2));
} else {
    console.error('Failed to read or parse JSON file.');
}
