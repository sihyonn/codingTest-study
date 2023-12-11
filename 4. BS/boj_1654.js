/**
 * 10815번 [랜선자르기]
 * 2023.12.11.월
 * https://www.acmicpc.net/problem/1654
 *
 * 입력 : 영식이의 랜선 K, 성원이가 필요한 랜선개수 N, K개의 랜선의 길이
 * 출력 : N개를 만들 수 있는 랜선의 최대 길이(정수)
 * point :
 */

const fs = require('fs');
let input = fs.readFileSync('./input1654.txt').toString().split('\n');
const [n, k] = input.shift().split(' ');
const lan = [...input].map(Number).sort((a, b) => a - b);

function solution(k, lan) {
  let s = 1;
  let e = Math.max(...lan);
  let result = 0;

  while (s <= e) {
    let total = 0;
    let mid = parseInt((s + e) / 2);

    for (l of lan) {
      total += parseInt(l / mid);
    }
    if (total >= k) {
      result = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  console.log(result);
}

solution(k, lan);
