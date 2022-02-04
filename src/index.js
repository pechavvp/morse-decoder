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
    let arr = expr.split("");

    let size = 2;
    let subarray = [];
    for (let i = 0; i < arr.length/size; i++){
    subarray[i] = (arr.slice((i*size), (i*size) + size)).join("");
    }
  console.log(subarray)
    let subarray2 = subarray.map(function(item) {
        if (item == "10") {
            item = ".";
            return item;
        } else if (item == "11") {
            item = "-";
            return item;
        } else if (item == "**") {
             item = "/";
            return item;
        }
    });
console.log(subarray2);
    size = 5;
    let subarray3 = [];
    for (let i = 0; i < subarray2.length/size; i++){
    subarray3[i] = (subarray2.slice((i*size), (i*size) + size)).join("");
    }
console.log(subarray3);
    let subarray4 = subarray3.map(function(item) {
        if (item == "/////") {
            item = " ";
            return item;
        } else {
            item = MORSE_TABLE[item];
            return item;
        }
    });
    return subarray4.join("");
}


module.exports = {
    decode
}