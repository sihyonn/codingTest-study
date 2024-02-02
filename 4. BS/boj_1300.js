/**
 * 1300 [k번째 수]
 * 2024.02.02.금요일
 * https://www.acmicpc.net/problem/1300
 *
 * 입력 : 배열의 크기 / 인덱스 번호
 * 출력 : B[k]
 * point : 현재 mid보다 작거나 같은 데이터의 수가 k개 이상이 되는 조건을 만족하는 mid 중 가장 작은 값
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const k = +input[1];

let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = Number.MAX_SAFE_INTEGER; // 배열에 존재할 수 있는 가장 큰 값
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0; //mid값보다 작거나 같은 데이터의 수

  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
