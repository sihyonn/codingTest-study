const input = require("fs")
  .readFileSync("./input_2776.txt")
  .toString()
  .trim()
  .split("\n");

const test = +input.shift();

for (let i = 0; i < test; i++) {
  input.shift(); // 현재 사용하지 않을 값 제거
  const first = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  input.shift();
  const second = input.shift().split(" ").map(Number);

  let answer = [];
  second.forEach((target) => {
    let min = 0;
    let max = first.length - 1;
    let mid;
    let success = false;
    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (first[mid] == target) {
        success = true;
        break;
      } else if (first[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    const result = success ? 1 : 0;
    answer.push(result);
  });
  console.log(answer.join("\n"));
}
