/**
 * 10814번 [나이순 정렬]
 * 2024.01.16.화요일
 * https://www.acmicpc.net/problem/10814
 *
 * 입력 : 회원수(n) / 나이(age), 이름(name)
 * 출력 : 나이순으로 오름차순 정렬하되, 나이가 같을 경우 가입한 순서대로 정렬한 값
 * point : 왼쪽 요소 즉 나이만을 기준으로 비교하면된다.
 */

const fs = require('fs');
let input = fs.readFileSync('./input10814.txt').toString().trim().split('\n');
console.log(input);
let members = input.slice(1);

function solution(members) {
  members.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
  console.log(members.join('\n'));
}

solution(members);
