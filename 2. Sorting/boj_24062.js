/**
 * 24062 [병합 정렬3]
 * 2024.01.16.화요일
 * https://www.acmicpc.net/problem/24062
 *
 * 입력 : 배열 a,b 크기 / a원소, b원소
 * 출력 : 병합 정렬로 배열 A를 오름차순 정렬하는 과정에서 배열 A가 배열 B와 같은 경우가 발생하면 1, 아니면 0을 출력
 * point : 병합 정렬을 수행하면서 배열이 같아지는 지 확인
 */
const input = require("fs")
  .readFileSync("2. Sorting/input.txt")
  .toString()
  .trim()
  .split("\n");

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없다.
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right));
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function solution(input) {
  const N = input[0][0];
  const arrA = input[1];
  const arrB = input[2];
  const sortedArray = mergeSort(arrA);
  const sortedArrA = arrA.slice();
  mergeSort(sortedArrA, 0, N - 1);

  if (areArraysEqual(sortedArrA, arrB)) {
    console.log(1);
  } else {
    console.log(0);
  }
}
solution(input);
