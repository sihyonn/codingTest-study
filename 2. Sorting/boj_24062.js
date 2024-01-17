/*
 * 백준 24062번 [알고리즘 수업 - 병합 정렬 3] -> 공통 문제
 * 2024.01.17.수
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
const { type } = require('os');
let input = fs.readFileSync('./input_boj24062.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/


let base = input[1].split(" ").map(Number);
let want = input[2].split(" ").map(Number);

let p = 0;
let r = (+input[0]) - 1;
let istrue = 0;

function merge(arr, p, q, r){
  let i = p;
  let j = q + 1;
  let t = 0;
  let tmp = [];
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }
  // 왼쪽 배열 부분이 남은 경우
  while (i <= q) {
    tmp[t++] = arr[i++];
  }
  // 오른쪽 배열 부분이 남은 경우
  while (j <= r) {
    tmp[t++] = arr[j++];
  }

  i = p;
  t = 0;

  while (i <= r) {
    arr[i++] = tmp[t++];
  }

  if (arr.toString() == want.toString()) {
    istrue = 1;
  }
}

function merge_sort(arr, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(arr, p, q);
    merge_sort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

merge_sort(base, p, r);

console.log(istrue);