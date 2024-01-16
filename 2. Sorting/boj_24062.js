/*
 * 백준 24062번 [알고리즘 수업 - 병합 정렬 3] -> 공통 문제
 * 2024.01.12.금
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./input_boj24062.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

let input_num = [];
for (let i=1; i < input.length; i++) {
  // 각 element와 해당 index를 2차원 배열 형태로 생성
  let temp = input[i].split(" ");
  let temp_num = [];
  for (let j=0; j < temp.length; j++){
    temp_num.push(+temp[j]);
  }
  input_num.push(temp_num);
}

/*
function merge_sort(arr) {
  let p = 
}

function merge(array, p, q, r)
*/