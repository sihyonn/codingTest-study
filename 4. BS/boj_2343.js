/**
 * 1654 [랜선 자르기]
 * 2024.01.24.수요일
 * https://www.acmicpc.net/problem/1654
 *
 * 입력 : 랜선의 개수 K 필요한 랜선의 개수 N
 * 출력 : K줄에 걸쳐 이미 가지고 있는 각 랜선의 길이
 * point : 이분 탐색으로 푸는 문제
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const [k, n] = input.shift().split(" ");
const line = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// const sum = course.reduce((r, v) => r + v, 0);
// let min = Math.ceil(sum / M);
// let max = sum;
// let mid;
// let answer = Infinity;
// while (min <= max) {
//   let updateMin = 0;
//   mid = Math.floor((min + max) / 2);
//   let temp = mid;
//   let cnt = 0;
//   for (let i = 0; i < N; i++) {
//     if (temp - course[i] >= 0) {
//       temp -= course[i];
//     } else {
//       cnt++;
//       temp = mid - course[i];
//       if (temp < 0) {
//         updateMin = course[i];
//         break;
//       }
//     }
//   }

//   if (updateMin > 0) {
//     min = updateMin;
//     continue;
//   }

//   if (temp < mid) cnt++;

//   if (cnt <= M) {
//     if (answer > mid) {
//       answer = mid;
//     }
//     max = mid - 1;
//   } else {
//     min = mid + 1;
//   }
// }

// console.log(answer);
