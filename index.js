const { textToMorse, morseToText } = require("./morse");
const { customEncode, customDecode } = require("./customEncodeDecode");

const message = "Hello ! World";

console.log("textToMorse : ", textToMorse(message));
console.log("morseToText : ", morseToText(textToMorse(message)));

console.log("customEncode : ", customEncode(message));
console.log("customDecode : ", customDecode(customEncode(message)));
