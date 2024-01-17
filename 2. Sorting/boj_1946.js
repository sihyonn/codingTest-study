/**
 * 1946 [신입 사원]
 * 2024.01.17.수요일
 * https://www.acmicpc.net/problem/1946
 *
 * 입력 : 테스트 케이스, 지원자의 수 / 서류 심사 성적, 면접 성적의 순위
 * 출력 : 각 테스트케이스에 대해 선발할 수 있는 신입사원의 최대 인원 수
 * point : 지원자의 서류심사 성적 순위, 면접 성적 순위가 키 포인트
        순위는 작을 수록 좋다!
*/
const [t, ...input] = require("fs")
  .readFileSync("2. Sorting/input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < t; i++) {
  let N = input.shift();
  let Case = input
    .splice(0, N)
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  let answer = 1;
  let top = Case[0][1];
  for (let i = 1; i < N; i++) {
    if (Case[i][1] < top) {
      top = Case[i][1];
      answer++;
    }
    if (top === 1) break;
  }
  console.log(answer);
}
