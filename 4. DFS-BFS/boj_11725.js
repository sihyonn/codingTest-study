/*
 * 백준 11725번 [트리의 부모 찾기] -> 공통 문제
 * 2024.02.14.수
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj11725.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
let graph = [...new Array(N + 1)].map(() => []);
let visited = [...new Array(N + 1)].fill(false);
let parent = [...new Array(N + 1)].fill(0);

for (let i = 0; i < N - 1; i++) {
  const start = Number(input[i + 1].split(" ")[0]);
  const end = Number(input[i + 1].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

function dfs(vertex) {
  if (visited[vertex]) {
    return;
  }

  visited[vertex] = true;
  graph[vertex].forEach((child) => {
    if (!visited[child]) {
      parent[child] = vertex;
    }

    dfs(child);
  });
}

dfs(1);

let ans = "";

for (let i = 2; i < parent.length; i++) {
  ans += parent[i] + "\n";
}
console.log(ans);
