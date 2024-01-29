/**
 * 6236번 [용돈관리]
 * 2024.01.29.월
 * https://www.acmicpc.net/problem/6236
 *
 * 입력 : 금액 사용할 기간(n), 고정 인출횟수(m) / 일일 사용할 금액(dailyMoney)
 * 출력 : 통장에서 인출해야 할 최소 금액(result)
 */

const fs = require('fs');
let input = fs.readFileSync('./input6236.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const money = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function solution(n, m, money) {
  let start = Math.max(...money);
  let end = money.reduce((a, b) => a + b, 0);
  let result;

  while (start <= end) {
    let cnt = 0;
    let remainMoney = 0;
    let mid = parseInt((start + end) / 2);

    for (let i = 0; i < n; i++) {
      remainMoney -= money[i];
      if (remainMoney < 0) {
        cnt++;
        remainMoney = mid - money[i];
      }
    }

    if (cnt > m) start = mid + 1;
    else {
      result = mid;
      end = mid - 1;
    }
  }

  console.log(result);
}

solution(n, m, money);
