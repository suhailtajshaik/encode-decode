const textToMorse = (text) => {
	// Define the Morse code dictionary
	const morseCode = {
		A: ".-",
		B: "-...",
		C: "-.-.",
		D: "-..",
		E: ".",
		F: "..-.",
		G: "--.",
		H: "....",
		I: "..",
		J: ".---",
		K: "-.-",
		L: ".-..",
		M: "--",
		N: "-.",
		O: "---",
		P: ".--.",
		Q: "--.-",
		R: ".-.",
		S: "...",
		T: "-",
		U: "..-",
		V: "...-",
		W: ".--",
		X: "-..-",
		Y: "-.--",
		Z: "--..",
		1: ".----",
		2: "..---",
		3: "...--",
		4: "....-",
		5: ".....",
		6: "-....",
		7: "--...",
		8: "---..",
		9: "----.",
		0: "-----",
		".": ".-.-.-",
		",": "--..--",
		"?": "..--..",
		"'": ".----.",
		"!": "-.-.--",
		"/": "-..-.",
		"(": "-.--.",
		")": "-.--.-",
		"&": ".-...",
		":": "---...",
		";": "-.-.-.",
		"=": "-...-",
		"+": ".-.-.",
		"-": "-....-",
		_: "..--.-",
		'"': ".-..-.",
		$: "...-..-",
		"@": ".--.-.",
		" ": "/",
	};

	// Convert the text to uppercase
	text = text.toUpperCase();

	let morse = "";

	// Go through each character in the text
	for (let i = 0; i < text.length; i++) {
		// If the character is in the dictionary, add its Morse code to the output string
		if (morseCode[text[i]]) {
			morse += morseCode[text[i]] + " ";
		}
	}

	// Return the Morse code string
	return morse.trim();
};

const morseToText = (morse) => {
	// Define the Morse code dictionary
	const morseCode = {
		".-": "A",
		"-...": "B",
		"-.-.": "C",
		"-..": "D",
		".": "E",
		"..-.": "F",
		"--.": "G",
		"....": "H",
		"..": "I",
		".---": "J",
		"-.-": "K",
		".-..": "L",
		"--": "M",
		"-.": "N",
		"---": "O",
		".--.": "P",
		"--.-": "Q",
		".-.": "R",
		"...": "S",
		"-": "T",
		"..-": "U",
		"...-": "V",
		".--": "W",
		"-..-": "X",
		"-.--": "Y",
		"--..": "Z",
		".----": "1",
		"..---": "2",
		"...--": "3",
		"....-": "4",
		".....": "5",
		"-....": "6",
		"--...": "7",
		"---..": "8",
		"----.": "9",
		"-----": "0",
		".-.-.-": ".",
		"--..--": ",",
		"..--..": "?",
		".----.": "'",
		"-.-.--": "!",
		"-..-.": "/",
		"-.--.": "(",
		"-.--.-": ")",
		".-...": "&",
		"---...": ":",
		"-.-.-.": ";",
		"-...-": "=",
		".-.-.": "+",
		"-....-": "-",
		"..--.-": "_",
		".-..-.": '"',
		"...-..-": "$",
		".--.-.": "@",
		"/": " ",
	};

	// Split the Morse code at spaces to get the Morse code of each letter
	let morseLetters = morse.split(" ");

	let text = "";

	// Go through each Morse code letter
	for (let i = 0; i < morseLetters.length; i++) {
		// If the Morse code letter is in the dictionary, add its corresponding character to the output string
		if (morseCode[morseLetters[i]]) {
			text += morseCode[morseLetters[i]];
		}
	}

	// Return the text
	return text;
};

module.exports = { textToMorse, morseToText };
