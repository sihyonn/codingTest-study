/**
 * 2512번[예산]
 * 2023.12.08.금
 * https://www.acmicpc.net/problem/2512
 *
 * 입력 : 지방수, 요청예산, 총예산
 * 출력 : 최종 배정 금액 중 최댓값
 */

const fs = require('fs');
let input = fs.readFileSync('./input2512.txt').toString().split('\n');
let demand = input[1].split(' ').map(Number); // 각 지방별 요청한 예산
let total = Number(input[2]); // 총 예산

function solution(demand, total) {
  // 상한액의 시작점과 끝점 설정(1 ~ 지방예산최대금액)
  let start = 1;
  let end = Math.max(...demand);

  let result = 0;
  while (start <= end) {
    //이진탐색수행(반복문사용)
    let mid = parseInt((start + end) / 2); // 현재 상한액
    let demandTotal = 0; //요청예산의 총합
    for (d of demand) {
      demandTotal += Math.min(mid, d); // 각 요청 돌면서 예산배정
    }

    // 요청예산의 합이 총예산 안넘었으면 상한액 증가시키기
    if (demandTotal <= total) {
      result = mid;
      start = mid + 1;
    } else {
      // 상한액 감소시키기
      end = mid - 1;
    }
  }
  console.log(result);
}

solution(demand, total);
