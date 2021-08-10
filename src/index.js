const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let res = '';

    for (let i = 0; i < expr.length; i += 10) {
        const letter = expr.slice(i, i + 10);
        let code = '';

        for (let j = 0; j < letter.length; j += 2 ) {
            const chunk = letter.slice(j, j + 2);

            if (chunk == '**') {
                res += ' ';
                break;
            }
            if (chunk == '10') {
                code += '.'; 
            }
            if (chunk == '11') {
                code += '-';
            }
            if (j === letter.length - 2) {
                res += MORSE_TABLE[code];
            }
        }
    }

    return res;
}

module.exports = {
    decode
}