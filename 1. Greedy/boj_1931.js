/**
 * 백준 1931번 [회의실 배정] -> 공통 문제
 * 2024.01.11.목
 */


const { log } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./boj1931_input.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

// input에 대한 개념 정리 필요...2
let n = Number(input[0]);
let times = [];
for (let i = 1; i <= n; i++) {
  times.push(input[i].split(' ').map(Number));
}

/* 기본 틀 
1. 주어진 입력 시간들에 대하여 2차원 배열 형태로 구성
2. 종료 시간에 대해 오름차순으로 정렬
3. 회의 종료시간이 다음 회의 시작시간보다 같은 경우(이는 연속적으로 진행이 가능하다는 의미)
  3-1. count 횟수 증가
  3-2. 회의 종료 시간 갱신
*/

// 2차원 배열 정렬(시작 시간 기준, 오름차순)
times.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  };
});

let end_time = times[0][1];

function solution(arr) {
  let count = 1;
  for (let i=1 ; i < arr.length; i++){
    if(end_time <= arr[i][0]){
      count++;
      end_time = arr[i][1];
    }
  }
  console.log(count);
}

solution(times);