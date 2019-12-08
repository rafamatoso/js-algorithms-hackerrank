'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .trim()
    .split('\n')
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function formatStringHour(hour, minute, second) {
  return hour + ':' + minute + ':' + second;
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let hour = s.substring(0, 2);
  const minute = s.substring(3, 5);
  const second = s.substring(6, 8);
  const period = s.substring(8, 10);
  if (period === 'AM') {
    if (hour === '12') {
      hour = '00';
      return formatStringHour(hour, minute, second);
    } else {
      return formatStringHour(hour, minute, second);
    }
  } else {
    if (hour < 12) {
      hour = parseInt(hour) + 12;
      return formatStringHour(hour, minute, second);
    } else {
      return formatStringHour(hour, minute, second);
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
