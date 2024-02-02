/**
 * 2470번[두 용액]
 * 2023.02.02.금
 * https://www.acmicpc.net/problem/2470
 *
 * 입력 : 전체 용액 수(n) / 특성값들
 * 출력 : 0에 가장 가까운 용액을 만들어내는 특성값 출력(오름차순)
 *       경우가 두 개 이상일 경우 그 중 아무거나 하나 출력
 * POINT : 오름차순해서 양쪽 끝부터 더해주면서 조건에 안맞으면 앞으로 옮겨가면서 업데이트해주기!
 */

const fs = require('fs');
let input = fs.readFileSync('./input2470.txt').toString().trim().split('\n');
const [n, list] = input;
let values = list
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

function solution(values) {
  let start = 0;
  let end = values.length - 1;
  let min = Infinity;
  let result = [0, 0];

  while (start < end) {
    let sum = values[start] + values[end];

    // 먼저 min 기록
    if (min > Math.abs(sum)) {
      min = Math.abs(sum);
      result[0] = values[start];
      result[1] = values[end];
    }

    if (sum === 0) break;
    sum < 0 ? start++ : end--;
  }

  console.log(result.join(' '));
}

solution(values);
