/**
 * 2606 [바이러스]
 * 2024.02.16
 * https://www.acmicpc.net/problem/2606
 *
 * 입력 : 컴퓨터의 수 N /   네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수 M / 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍
 * 출력 : 1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수
 * point : 이분 탐색으로 푸는 문제
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "3. DFS-BFS/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
visited[1] = true;
let count = 0;

for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

const dfs = (start) => {
  for (let i of graph[start]) {
    if (visited[i] === false) {
      visited[i] = true;
      count++;
      dfs(i);
    }
  }
};

dfs(1);

console.log(count);
