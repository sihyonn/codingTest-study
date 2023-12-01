const [N, ...scores] = require("fs")
  .readFileSync("1. Greedy/boj_2847.js")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let answer = 0;
for (let i = N - 1; i > 0; i--) {
  if (scores[i - 1] >= scores[i]) {
    // 레벨을 조정하는 작업이 한 번 수행될 때마다 1만큼의 작업 횟수가 추가
    answer += scores[i - 1] - scores[i] + 1;
    // scores[i]보다 1작게 만들어 저장
    scores[i - 1] = scores[i] - 1;
  }
}
console.log(answer);
