/**
 * 18353번 [병사 배치하기]
 * 2023.12.07.목
 * https://www.acmicpc.net/problem/18353
 *
 * 입력 : 병사 수, 전투력 목록
 * 출력 : 남아있는 병사의 수 최대가 되도록 하기 위해 열외해야하는 병사의 수
 */

const fs = require('fs');
let input = fs.readFileSync('./input18353.txt').toString().split('\n');
let n = Number(input[0]);
let power = input[1].split(' ').map(Number);

// 문제풀이
function solution(power) {
  power.reverse();

  let arr = [0];
  for (x of power) {
    if (arr[arr.length - 1] < x) arr.push(x);
    else {
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        mid = parseInt((left + right) / 2);

        if (arr[mid] >= x) right = mid;
        else left = mid + 1;
      }

      arr[right] = x;
    }
  }

  console.log(n - (arr.length - 1));
}

solution(power);
