'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function comparator(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let sumMin = 0;
  let sumMax = 0;
  let newSortedArr = [];
  newSortedArr = arr.sort(comparator);
  for (let i = 0; i < newSortedArr.length - 1; i++) {
    sumMin += newSortedArr[i];
  }
  sumMax = sumMin + newSortedArr[newSortedArr.length - 1] - newSortedArr[0];
  console.log(sumMin, sumMax);
}

function main() {
  const arr = readLine()
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
