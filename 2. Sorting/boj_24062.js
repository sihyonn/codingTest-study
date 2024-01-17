/**
 * 24062번 [병합정렬3]
 * 2024.01.17.수요일
 * https://www.acmicpc.net/problem/24062
 *
 * 입력 : 배열 A, B의 크기(n) / 배열 A의 원소(a) / 배열 B의 원소(b)
 * 출력 : A를 병합정렬로 오름차순 정렬하는 과정에서 A와 B가 같은 경우 발생하면 1, 아니면 0
 */

const fs = require('fs');
let input = fs.readFileSync('./input24062.txt').toString().trim().split('\n');
let [n, a, b] = input;
let arrA = a.split(' ').map(Number);
let arrB = b.split(' ').map(Number);

let sorted = new Array(1500000).fill(0);
let last = 0;

let chkSame = () => {
  for (let last = 0; last < n; last++) {
    if (arrA[last] !== arrB[last]) return 0;
  }
  return 1;
};

const merge = (p, q, r) => {
  let i, j, t;
  i = p;
  j = q + 1;
  t = 1;

  while (i <= q && j <= r) {
    if (arrA[i] <= arrA[j]) {
      sorted[t++] = arrA[i++];
    } else {
      sorted[t++] = arrA[j++];
    }
  }

  while (i <= q) {
    sorted[t++] = arrA[i++];
  }
  while (j <= r) {
    sorted[t++] = arrA[j++];
  }

  i = p;
  t = 1;
  while (i <= r) {
    if (i < last && arrA[i] !== sorted[t]) {
      last = i;
    }
    arrA[i++] = sorted[t++];
    if (i >= last && chkSame()) {
      return 1;
    }
  }

  return 0;
};

const mergeSort = (left, right) => {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mergeSort(left, mid)) return 1; //왼쪽 쪼개기
    if (mergeSort(mid + 1, right)) return 1; // 오른쪽 쪼개기
    if (merge(left, mid, right)) return 1; //합병
  }
  return 0;
};

function solution(n, arrA, arrB) {
  let flag = true;

  for (let i = 0; i < n; i++) {
    if (arrA[i] !== arrB[i]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log('1');
  } else {
    console.log(mergeSort(0, n - 1));
  }
}
solution(n, arrA, arrB);
