/**
 * 4796번[캠핑]
 * 2024.01.16.화요일
 * https://www.acmicpc.net/problem/4796
 *
 * 입력 : 사용가능한 기간(l), 열린기간(p), 휴가일수(v)
 * 출력 : 최대 사용가능한 일 수(case: n 형식)
 */

const fs = require('fs');
let input = fs.readFileSync('./input4796.txt').toString().split('\n');

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(' ').map(Number);
  const [l, p, v] = arr;

  if (l === 0 && p === 0 && v === 0) break;
  let d1 = Math.floor(v / p) * l;
  let d2 = v % p;

  if (d2 > l) d2 = l;
  console.log(`Case ${i + 1}: ${d1 + d2} `);
}
