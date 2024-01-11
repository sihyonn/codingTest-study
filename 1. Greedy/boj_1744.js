/**
 * 백준 1744번 [수 묶기] -> 공통 문제
 * 2024.01.08.월
 */


// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./boj1744_input.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/


/* 기본 틀 
1. 양수와 음수를 구분하여 각각의 배열에 저장한다. 
2. 양수 배열(p)과 음수 배열(m)을 정렬한다. 
3. 양수 배열
  3-1. p[i + 1]이 양수이면, p[i], p[i + 1]을 곱해준다.
  3-2. p[i + 1]이 1이면, p[i], p[i + 1]을 더해준다.
4. 음수 배열
  4-1. p[i]와 p[i + 1]을 곱해준다.
*/
const num = +input[0];
let positive = [];
let negative = [];
function input_list(input) {
    let input_num = [];
    for (let i=1; i < input.length; i++){
      let temp = Number(input[i]);
      if (temp > 0) {
        positive.push(temp);
      }
      else {
        negative.push(temp);
      }
    }
    positive.sort((a, b) => b - a); // 내림차순으로 정렬

    negative.sort((c, d) => c - d); // 오름차순으로 정렬
}

input_list(input);  // input한 내용 설정(양수, 음수별 배열 생성)

function solution() {
  let sum = 0;
  // positive case
  // 1. postive
  if (positive.length % 2 === 1){
    for(let i=0; i < positive.length; i=i+2){
      if (i === positive.length - 1){
        let temp = positive[i];
        sum += temp;
      }
      else {
        // postive에서 1의 값이 있는 경우 
        // 곱하는 것이 아닌 더해주는 것이 더 값이 크게 나오므로 더해준다.
        if (positive[i] === 1 || positive[i+1] === 1){
          let temp = positive[i] + positive[i+1];
          sum += temp;
        } else {
          let temp = positive[i] * positive[i+1];
          sum += temp;
        }
      }
    }
  } 
  else {
    for(let i=0; i < positive.length; i=i+2){
      // postive에서 1의 값이 있는 경우 
      // 곱하는 것이 아닌 더해주는 것이 더 값이 크게 나오므로 더해준다.
      if (positive[i] === 1 || positive[i+1] === 1){
        let temp = positive[i] + positive[i+1];
        sum += temp;
      }
      else {
        let temp = positive[i] * positive[i+1];
        sum += temp;
      }
    }
  }

  // Negative case
  if (negative.length % 2 === 1){
    for(let i=0; i < negative.length; i=i+2){
      if (i === negative.length - 1){
        let temp = negative[i];
        sum += temp;
      }
      else {
        let temp = negative[i] * negative[i+1];
        sum += temp;
      }
    }
  } 
  else {
    for(let i=0; i < negative.length; i=i+2){
      let temp = negative[i] * negative[i+1];
      sum += temp;
    }
  }

  console.log(sum);
}

solution();
