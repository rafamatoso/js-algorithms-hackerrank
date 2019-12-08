'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] < b[i]) {
      countB++;
    } else if (a[i] > b[i]) {
      countA++;
    }
  }
  return [countA, countB];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(aTemp => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
