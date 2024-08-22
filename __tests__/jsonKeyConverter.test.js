const JsonKeyConverter = require('../jsonKeyConverter');

describe('JsonKeyConverter', () => {
  it('should convert hyphenated keys to underscored keys in a JSON object', () => {
    const inputJson = {
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
    };

    const expectedOutput = {
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
    };

    const converter = new JsonKeyConverter();
    const outputJson = converter.replaceHyphensKeys(inputJson);

    expect(outputJson).toEqual(expectedOutput);
  });
});
