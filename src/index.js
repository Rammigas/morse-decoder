const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let arr = []
for (let i = 0; i < expr.length; i += 10) {
	arr.push(expr.slice(i, i + 10))
}
arr = arr.map(el => el = el.replace(/^0+/, ''))
let morseArr = arr.map(ten => ten = ten.replace(/10/g, '.'))
morseArr = morseArr.map(eleven => eleven = eleven.replace(/11/g, '-'))
morseArr = morseArr.map(star => star = star.replace('**********', ' '))
for (let i = 0; i < morseArr.length; i ++) {
	
	if (morseArr!=='') {
		morseArr[i] = MORSE_TABLE[morseArr[i]]
		if (morseArr[i] === undefined){
			morseArr[i] =' '
		}
	}
		
}
return morseArr.join('')
}

module.exports = {
    decode
}