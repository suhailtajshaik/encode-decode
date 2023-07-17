const padNumber = 3;

function encriptCode(number, pad) {
	let paddedNumber = "" + number;
	let paddedString = paddedNumber.padStart(pad, "0");
	return paddedString;
}

// work in progress
function decriptCode(encoded, pad) {
	// let letterCodes = encoded.split(pad);

	const letterCodes = [];
	for (let i = 0; i < encoded.length; i += pad) {
		letterCodes.push(+encoded.substring(i, i + pad));
	}
	return letterCodes;
}

const customEncode = (text) => {
	let encoded = "";
	for (let i = 0; i < text.length; i++) {
		let code;
		code = encriptCode(text.charCodeAt(i), padNumber);
		encoded += code;
	}
	return encoded;
};

const customDecode = (encoded) => {
	let decoded = "";
	const letterCodes = decriptCode(encoded, padNumber); //[];
	// for (let i = 0; i < encoded.length; i += 3) {
	// 	letterCodes.push(+encoded.substring(i, i + 3));
	// }
	for (let i in letterCodes) {
		let code = letterCodes[i];
		decoded += String.fromCharCode(code);
	}
	return decoded;
};

module.exports = { customEncode, customDecode };
// console.log(customEncode("Hello World")); // Outputs "721011081081110087111114108100"
// console.log(customDecode("072101108108111032087111114108100")); // Outputs "Hello World"
