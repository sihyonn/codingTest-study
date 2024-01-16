/*
 * 백준 24062번 [알고리즘 수업 - 병합 정렬 3] -> 공통 문제
 * 2024.01.12.금
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./input_boj24062.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

let input_num = [];
for (let i=1; i < input.length; i++) {
  // 각 element와 해당 index를 2차원 배열 형태로 생성
  let temp = input[i].split(" ");
  let temp_num = [];
  for (let j=0; j < temp.length; j++){
    temp_num.push(+temp[j]);
  }
  input_num.push(temp_num);
}

let base = input_num[0];
let want = input_num[1];

console.log(base, want);

let p = 0;
let r = (+input[0]) - 1;

console.log(p, r)
function merge_sort(arr, p, r) {
  if (p < r) {
    let q = (p + r) / 2;
    merge_sort(arr, p, q);
    merge_sort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r){
  let i = p;
  let j = q + 1;
  let t = 1;
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[t++] <- A[i++]; // tmp[t] <- A[i]; t++; i++;
    } else {
      tmp[t++] <- A[j++]; // tmp[t] <- A[j]; t++; j++;
    }
  }
  // 왼쪽 배열 부분이 남은 경우
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  // 오른쪽 배열 부분이 남은 경우
  while (j <= r) {

  }

}