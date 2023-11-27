/**
 * Input
 * 첫째줄 테스트케이스 개수
 * 둘째줄 각 테스트케이스마다 학생의 수가 0번재로, 뒤로 N명의 점수
 *
 * 5
 * 5 50 50 70 80 100
 * 7 100 95 90 80 70 60 50
 * 3 70 90 80
 * 3 70 90 81
 * 9 100 99 98 97 96 95 94 93 91
 */

/* 자스는 한번에 입력값이 들어오니까 정제해서 써줘야하는데
  1. 줄바꿈단위로 split - 배열에 문자열로 각 줄이 값으로 들어옴
  2. 테스트케이스 수 C 추출 - +input[0] 👉🏻 그냥 input[0] 해버리면 문자 5 들어옴.
      So, +를 붙여서 Number로 바꿔주기

*/

const fs = require('fs');
let input = fs.readFileSync('./test_input.txt').toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  // 한줄씩 배열로 넣어서 숫자화
  const arr = input[i].split(' ').map((v) => +v);
  // 각테스트케이스별 점수배열만들기
  const newArr = arr.slice(1);

  const testCase = {
    N: arr[0],
    scoreArr: newArr,
  };
  inputTestCase.push(testCase);
}
console.log('테스트케이스: ', inputTestCase);

/**
 * testCase는 N과 N명의 정수 배열로 이루어짐
 * C = 5
 * testCase = [
 *  {
 *    N : 5
 *    scoreArr : [50, 50, 70, 80, 100]
 *   }
 *  ...
 * ]
 */

// 문제풀이 시작!
function solution(C, testCase) {}

solution(inputC, inputTestCase);
