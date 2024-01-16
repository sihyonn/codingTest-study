/*
 * 백준 10814번 [나이순 정렬 정리] -> 공통 문제
 * 2024.01.16.화
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./input_boj10814.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

let num = +input[0];

let input_list = [];
for (let i=1; i < input.length; i++) {
  // 각 element와 해당 index를 2차원 배열 형태로 생성
  let temp = input[i].split(" ");
  let temp_age = +temp[0];
  let temp_name = temp[1].replace(/\r/g, ""); // '\r' 개행문자 제거
  input_list.push([temp_age, temp_name]);
}

// 나이를 기준으로 하여 오름차순 정렬 시행
input_list.sort((a, b) => a[0]- b[0]);

// 출력
for (let i=0; i < input_list.length; i++){
  let age = input_list[i][0];
  let name = input_list[i][1];
  console.log(age + " " + name);
}