/*
 * 백준 1377번 [버블 소트] -> 공통 문제
 * 2024.01.15.월
 */

const fs = require('fs');
let input = fs.readFileSync('./input_boj1377.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

let input_num = [];
for (let i=1; i < input.length; i++) {
  // 각 element와 해당 index를 2차원 배열 형태로 생성
  input_num.push([+input[i], i]);
}

// input에 대한 정렬 진행(element 기준 오름차순)
input_num.sort((a, b) => a[0] - b[0]);

function solution(num_array) {
  let result = [];
  for (let i=1; i <= num_array.length; i++){
    let temp = num_array[i-1][1] - i;
    result.push(temp);
  }
  console.log(Math.max.apply(null, result) + 1);
}

solution(input_num);