/**
 * 1343번 [폴리오미노]
 * 2023.12.01.금
 * https://www.acmicpc.net/problem/2847
 *
 * 입력 : 레벨수(첫 줄), 각 레벨 클리어 시 얻는 점수(한 줄에 하나)
 * 출력 : 점수를 몇번 감소시키면 되는지(최소한으로)
 * point : 큰 A 길이 이상이면 A로 다채우고 나머지 B로
 */

/* 입력정제
  줄바꿈 단위로해서 각 레벨별 점수를 배열로받아옴
*/

const fs = require('fs');
let input = fs.readFileSync('./input2847.txt').toString().split('\n');
let [N, ...level] = input;

// //문제풀이
function solution(level) {
  let cnt = 0;

  for (let i = level.length - 1; i >= 0; i--) {
    while (level[i] <= level[i - 1]) {
      level[i - 1]--;
      cnt++;
    }
  }
  console.log(cnt);
}

solution(level);
