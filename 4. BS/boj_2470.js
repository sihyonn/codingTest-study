/**
 * 2470 [두 용액]
 * 2024.01.30.화요일
 * https://www.acmicpc.net/problem/2470
 *
 * 입력 : 전체 용액의 수 N
 * 출력 : 특성값이 0에 가장 가까운 용액을 만들어내는 두 용액의 특성값
 * point : 최대한 0에 가깝게 만드는 것이 best
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let ans = Number.MAX_SAFE_INTEGER;
let ans_pair = new Array(2).fill(0);
while (start !== end) {
  let sum = arr[start] + arr[end];
  if (Math.abs(sum) < ans) {
    ans = Math.abs(sum);
    ans_pair[0] = arr[start];
    ans_pair[1] = arr[end];
  }
  if (sum === 0) break;
  else if (sum > 0) end--;
  else start++;
}
console.log(ans_pair.join(" "));
