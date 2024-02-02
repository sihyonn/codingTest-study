/*
 * 백준 2470번 [두 용액] -> 공통 문제
 * 2024.01.30.화
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2470.txt')
  .toString()
  .split('\n');

const [N] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let left = arr[0];
let right = arr[N - 1];
let result_left = 0, result_right = 0;

if (right <= 0){
  result_left = arr[N-2];
  result_right = arr[N-1];
}
else if (left >= 0) {
  result_left = arr[0];
  result_right = arr[1];
}
else {
  const mid = 0;
  let close = Number.MAX_SAFE_INTEGER;
  let left_index = 0, right_index = N - 1;

  while (left < right) {
    if (left + right === mid){
      result_left = left;
      result_right = right;
      break;
    } else if (left + right > mid) {  // left, right의 합이 양수인 경우
      if (Math.abs(left + right) < close){
        close = Math.abs(left + right);
        result_left = left;
        result_right = right;
      }
      right = arr[right_index--];
    } else { // left, right의 합이 음수인 경우
      if (Math.abs(left + right) < close){
        close = Math.abs(left + right);
        result_left = left;
        result_right = right;
      }
      left = arr[left_index++];
    }
  }
}


console.log(result_left, result_right);