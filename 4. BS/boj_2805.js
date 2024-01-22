/**
 * 2805번 [나무 자르기]
 * 2024.01.22.월
 * https://www.acmicpc.net/problem/2805
 *
 * 입력 : 나무의 수(n), 가져갈 나무길이(m) / 나무의 높이(height)
 * 출력 : 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에서 설정하 수 있는 높이의 최댓값 출력
 */

const fs = require('fs');
let input = fs.readFileSync('./input2805.txt').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let trees = input[1].split(' ').map(Number);

function solution(m, trees) {
  let start = 1;
  let end = Math.max(...trees);
  let result = 0; // 최대값이 될 아이
  trees.sort((a, b) => a - b);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let totalHeight = 0; // 전체 잘라낸 나무길이 합
    for (let tree of trees) {
      if (tree >= mid) {
        totalHeight += tree - mid;
      }
    }

    if (totalHeight >= m) {
      result = mid;
      start = mid + 1;
    } else [(end = mid - 1)];
  }
  console.log(result);
}

solution(m, trees);
