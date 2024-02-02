/**
 * 백준 11399번 [ATM]
 * 2024.01.08.월
 */


// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./input_boj11399.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const people = +input[0];
const time = input[1].split(' ').map((v) => +v);

function solution(people, time){
  // sort 사용법 익숙해지기
  time.sort((a, b) => a - b);

  let waiting = 0;
  let result = 0;
  for (let i=0; i < people; i++){
    result = result + waiting + time[i];
    waiting += time[i];
  }
  console.log(result);
}

solution(people, time);
