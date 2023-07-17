# Encode & Decode

```
const { textToMorse, morseToText } = require("./morse");
const { customEncode, customDecode } = require("./customEncodeDecode");

const message = "Hello ! World";

console.log("textToMorse : ", textToMorse(message)); // Output :  .... . .-.. .-.. --- / -.-.-- / .-- --- .-. .-.. -..
console.log("morseToText : ", morseToText(textToMorse(message))); // Output : HELLO ! WORLD

console.log("customEncode : ", customEncode(message)); // Output : "072101108108111032033032087111114108100"
console.log("customDecode : ", customDecode(customEncode(message))); // Output : Hello ! World
```
