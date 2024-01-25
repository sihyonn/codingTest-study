/*
 * 백준 2110번 [공유기 설치] -> 공통 문제
 * 2024.01.23.화
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2110.txt')
  .toString()
  .trim()
  .split('\n');

const input_check1 = input[0].split(' ');
const input_C = +input_check1[1];
  
let positions = [];
for (let i=1; i < input.length; i++) {
  let temp = +input[i];
  positions.push(temp);
}
  
positions.sort();

let start = 1;
let end = positions[positions.length - 1];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = positions[0];
  for (const cur of positions) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < input_C) end = mid - 1;
  else start = mid + 1;
}

console.log(end);

/* 구글링
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input_boj2110.txt";
const input = fs.readFileSync(filePath).toString();

const [N, C, ...positions] = input
  .trim()
  .split(/\s/)
  .map(Number);
positions.sort((a, b) => a - b);

let start = 1;
let end = positions[positions.length - 1];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = positions[0];
  for (const cur of positions) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < C) end = mid - 1;
  else start = mid + 1;
}

console.log(end);
*/