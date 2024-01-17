const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const newArray = input.slice(1).map((arr) => arr.split(' '));
const sortedArray = newArray.sort((a, b) => a[1] - b[1]);
const sortArray = sortedArray.sort((a, b) => Number(a[0]) - Number(b[0]));
console.log(sortArray.map((arr) => arr.join(' ')).join('\n'));
