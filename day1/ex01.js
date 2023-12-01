// First, the helper functions are defined.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findFristNumber(str) {
    const match = str.match(/\d/);

    return match ? parseInt(match[0], 10) : null;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function splitOnLineBreaks(inputString) {
    return inputString.split('\n');
}

function processLine(str) {
    return 10 * findFristNumber(str) + findFristNumber(reverseString(str));
}

function processArray(arr) {
    return arr.map(processLine);
}

// Below, the input handling is done.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.setPrompt('Paste your text (Ctrl+D to finish):\n');
rl.prompt();

rl.on('line', (line) => {
  // Read lines until Ctrl+D is entered
  lines.push(line);
});

rl.on('close', () => {
  // Handle the entered lines
  processInputLines();
});

function processInputLines() {
  console.log('You entered the following lines:');
  lines.forEach((line, index) => {
    console.log(`Line ${index + 1}: ${line}`);
  });
  
  const processedArray = processArray(lines);
  const sum = processedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log(processedArray);
  console.log(sum);
}



