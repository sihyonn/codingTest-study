/*
 * 백준 2512번 [예산] -> 공통 문제
 * 2024.02.02.금
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2512.txt')
  .toString()
  .split('\n');

// setting input
const N = +input[0];
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const M = +input[2];

let left = 0;
let right = arr[N - 1];

let maxSum = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let temp_sum = 0;
  
  for (const local of arr) {
    if (local >= mid){
      temp_sum += mid;
    } else {
      temp_sum += local;
    }
  }

  if (temp_sum <= M) {
    if (temp_sum > maxSum) {
      maxSum = temp_sum;
      left = mid + 1;
    }
  }
  else {
    right = mid - 1;
  }
}

console.log(right);