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

const num = +input[0];
function input_list(input) {
    let input_num = [];
    for (let i=1; i < input.length; i++){
      let temp = Number(input[i]);
      input_num.push(temp);
    }
    return input_num;
}

const num_list = input_list(input);

function solution(num, num_list) {
    num_list.sort((a, b) => a - b);
    console.log(num_list);

}

solution(num, num_list);
