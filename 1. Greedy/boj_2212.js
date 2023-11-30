/**
 * 2212번 [센서]
 * 2023.11.30.목
 * https://www.acmicpc.net/problem/2212
 *
 * 입력 : 센서 개수, 집중국 개수, N개 센서의 좌표(한 개의 정수)
 * 출력 : K개의 집중국의 수신 가능 영역의 길이의 합의 최솟값
 * point : K개 집중국이 있을때 K-1개의 빈 공간이 생기는데
 *         센서사이 거리 구해서 가장 거리가 긴것부터 K-1개 빼주기
 */

/* 입력정제
  필요한것만 따지면?
  k : 집중국 개수(숫자)
  p : 센서좌표(배열)
*/

const fs = require('fs');
let input = fs.readFileSync('./input2212.txt').toString().split('\n');

let k = input[1];
let p = input[2].split(' ');

//문제풀이
function solution(k, p) {
  let position = [...new Set(p)].sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < position.length - 1; i++) {
    arr.push(position[i + 1] - position[i]);
  }

  let result = arr
    .sort((a, b) => b - a)
    .slice(k - 1)
    .reduce((a, c) => a + c, 0);

  console.log(result);
}

solution(k, p);
