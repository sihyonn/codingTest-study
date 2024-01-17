/**
 * 1377번 [버블 소트]
 * 2024.01.17.수요일
 * https://www.acmicpc.net/problem/1377
 *
 * 입력 : 배열크기(n) / 정렬해야하는 수(a[1]부터)
 * 출력 : 패스가 몇번?
 * point : 정렬 후 각각의 숫자 인덱스 - 정렬 전 각각의 숫자 인덱스 중에 차이가 큰 수 + 1
 */

const fs = require('fs');
let input = fs.readFileSync('./input1377.txt').toString().trim().split('\n');
const [n, ...list] = input;
let arr = list.map(Number);

function solution(arr) {
  // 1. original 배열 생성 [값, 인덱스]
  const original = arr.map((v, idx) => [v, idx]);
  // 2. sorted 배열 생성 값을 기준으로 오름차순 정렬
  const sorted = [...original].sort((a, b) => a[0] - b[0]);
  // 3. sorted를 돌면서 값 - original 값 빼주기
  const diff = original.map((item, idx) => sorted[idx][1] - item[1]);
  // 4. 최대값 구해서 + 1 출력
  const result = Math.max(...diff);
  console.log(result + 1);
}
solution(arr);
