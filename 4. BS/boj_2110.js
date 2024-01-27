const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, C] = input[0].split(' ').map(Number);
const houses = input.slice(1).map(Number);

houses.sort((a, b) => a - b);

let start = 1;
let end = houses[N - 1] - houses[0];
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 1;
  let currentHouse = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] >= currentHouse + mid) {
      count++;
      currentHouse = houses[i];
    }
  }

  if (count >= C) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
