/*
 * 백준 2644번 [촌수 계산] -> 공통 문제
 * 2024.02.17.토
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj2644.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const [person1, person2] = input.shift().split(" ");
const M = +input.shift();
const visited = Array(N + 1).fill(false);

const relations = input.reduce((acc, v) => {
  const [parent, child] = v.split(" ");
  if (!acc[parent]) {
    acc[parent] = [child];
  } else {
    acc[parent].push(child);
  }
  if (!acc[child]) {
    acc[child] = [parent];
  } else {
    acc[child].push(parent);
  }
  return acc;
}, {});

const dfs = (start, target) => {
  visited[start] = true;
  const stack = [[start, 0]];
  while (stack.length) {
    const [person, depth] = stack.pop();
    if (person === target) {
      return depth;
    }
    if (relations[person]) {
      relations[person].forEach((nextPerson) => {
        if (!visited[nextPerson]) {
          visited[nextPerson] = true;
          stack.push([nextPerson, depth + 1]);
        }
      });
    }
  }
  return -1;
};

console.log(dfs(person1, person2));
