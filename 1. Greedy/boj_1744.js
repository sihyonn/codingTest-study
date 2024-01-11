// BOJ 1744 수 묶기
// 2024. 01. 10
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sequence = input.slice(1);

function devidePositiveNegative(array) {
  const positive = [];
  const negative = [];
  array.forEach((number) => {
    if (number > 0) {
      positive.push(number);
    }
    if (number <= 0) {
      negative.push(number);
    }
  });
  return [positive, negative];
}

function devideArray(array) {
  const arrayA = [];
  const arrayB = [];
  array.sort((a, b) => Math.abs(b) - Math.abs(a));
  array.forEach((number, idx) => {
    if (idx % 2 === 0) {
      arrayA.push(number);
    } else arrayB.push(number);
  });
  return [arrayA, arrayB];
}

const [positive, negative] = devidePositiveNegative(sequence);
const [positiveA, positiveB] = devideArray(positive);
const [negativeA, negativeB] = devideArray(negative);

const positiveSum = positiveA.reduce((acc, cur, idx) => {
  if (positiveB[idx] !== undefined) {
    if (positiveB[idx] === 1) {
      return (acc = acc + cur + positiveB[idx]);
    }
    return (acc = acc + cur * positiveB[idx]);
  } else return (acc = acc + cur);
}, 0);

const negativeSum = negativeA.reduce((acc, cur, idx) => {
  if (negativeB[idx] !== undefined) {
    return (acc = acc + cur * negativeB[idx]);
  } else return (acc = acc + cur);
}, 0);

console.log(positiveSum + negativeSum);
