/**
 * 11399번 [ATM]
 * 2023.11.27.월
 * https://www.acmicpc.net/problem/11399
 *
 * 입력 : 총 사람 수, 각 사람이 인출에 걸리는 시간
 * 출력 : 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값
 * point : 가장 적게 걸리는 사람부터 인출하게하면 됨
 */

/* 입력정제
  굳이 사람수를 추출해야할까?싶지만 일단
  people = 5
  time = [3, 1, 4, 3, 2]
*/
const fs = require('fs');
let input = fs.readFileSync('./input11399.txt').toString().split('\n');

const people = +input[0];
const time = input[1].split(' ').map((v) => +v);

// 문제풀이
function solution(people, time) {
  let result = 0;
  let sum = 0;
  time.sort((a, b) => a - b);
  for (let i = 0; i < time.length; i++) {
    sum += time[i];
    result += sum;
  }
  return result;
}

solution(people, time);
