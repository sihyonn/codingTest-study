/**
 * 2805번 [나무 자르기]
 * 2023.12.09.토
 * https://www.acmicpc.net/problem/2805
 *
 * 입력 : 나무개수, 집으로가져갈 나무 길이, 나무높이배열
 * 출력 : M미터 나무 집에 가져가기 위해 절단기에 설정할 높이의 최댓값
 * point :
 */

const fs = require('fs');
let input = fs.readFileSync('./input2805.txt').toString().split('\n');
[n, m] = input[0].split(' ');
let trees = input[1].split(' ').map(Number);

function solution(m, trees) {
  let start = 1;
  let end = Math.max(...trees);
  let result = 0;
  trees.sort((a, b) => a - b);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let totalM = 0;
    for (let tree of trees) {
      if (tree >= mid) {
        totalM += tree - mid;
      }
    }
    if (totalM >= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
}

solution(m, trees);
