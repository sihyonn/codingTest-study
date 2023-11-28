/**
 * 입력 : 요리시간
 * 출력 : 요리시간을 위한 최소 버튼 조작의 a b c 횟수
 */ 1;

let input = require("fs")
  .readFileSync("1. Greedy/input_10162.txt")
  .toString()
  .trim();
let time = parseInt(input);
let A = 0;
let B = 0;
let C = 0;
if (time >= 300) {
  A = Math.floor(time / 300);
  time = time % 300;
}
if (time >= 60 && time < 300) {
  B = Math.floor(time / 60);
  time = time % 60;
}
if (time >= 10 && time < 60) {
  C = Math.floor(time / 10);
  time = time % 10;
}
if (time !== 0) {
  console.log(-1);
} else {
  console.log(`${A} ${B} ${C}`);
}
