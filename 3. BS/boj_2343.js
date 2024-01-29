/*
 * 백준 2343번 [기타 레슨] -> 공통 문제
 * 2024.01.29.월
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2343.txt')
  .toString()
  .split('\n');


let [M, N] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let left = Math.max(...arr);
let right = 0;
for (let i=0; i < M; i++) {
  right += arr[i];
}

let answer = Number.MAX_SAFE_INTEGER;

while(left <= right) {
  let mid = Math.floor((left + right) / 2);

  let count = 1;
  let temp_sum = 0;
  for (let i = 0; i < M; i++) {
    if (temp_sum + arr[i] <= mid) {
      temp_sum += arr[i];
    } else {
      count++;
      temp_sum = 0 + arr[i];
      if (count > N) break;
    }
  }
  if (count > N) {
    left = mid + 1;
  }
  if (count <= N) {
    if (answer >= mid) answer = mid;
    right = mid - 1;
  }
}

console.log(answer);