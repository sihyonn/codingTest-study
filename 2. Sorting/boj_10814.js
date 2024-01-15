/**
 * 10814 [나이순 정렬]
 * 2024.01.15.월요일
 * https://www.acmicpc.net/problem/10814
 *
 * 입력 : 온라인 저지 회원의 수 / 회원나이 이름
 * 출력 :  나이순 정렬, 나이가 같으면 가입한 순 정렬
 * point : 2차원 배열 정렬을 해야한다.
 */
let input = require("fs")
  .readFileSync("2. Sorting/input.txt")
  .toString()
  .trim()
  .split("\n");
const len = input.shift();
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));
