// First, the helper functions are defined.
function processLine(str) {

    const regex = /(?:one|two|three|four|five|six|seven|eight|nine|[1-9])/gi;
    var matches = str.match(regex) || [];

    var first = wordToDigit(matches[0]);
    var last = wordToDigit(matches[matches.length - 1]);

    return 10 * first + last;
}

function wordToDigit(word) {
  switch (word) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return parseInt(word, 10);
  }
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
  
  var processedArray = lines.map(processLine);
  var sum = processedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log(processedArray);
  console.log(sum);
}

