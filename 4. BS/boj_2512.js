const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const budgets = input[1].split(' ').map(Number);
const totalBudget = Number(input[2]);

budgets.sort((a, b) => a - b);

let left = 0;
let right = Math.max(...budgets);

let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Math.min(budgets[i], mid);
  }

  if (sum <= totalBudget) {
    answer = Math.max(answer, mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

return answer;
