/**
 * 11725 [트리의 부모 찾기]
 * 2024.02.16
 * https://www.acmicpc.net/problem/11725
 *
 * 입력 : 노드의 개수 N / N-1개의 줄에 트리 상에서 연결된 두 정점
 * 출력 : 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력
 * point :
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "3. DFS-BFS/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const graph = [];
const answer = [];
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

input.forEach((edge) => {
  const [from, to] = edge.split(" ");
  graph[from].push(to);
  graph[to].push(from);
});
const bfs = (start) => {
  const visited = new Array(N);
  visited[start] = true;

  const queue = [start];

  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];

      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }
};

bfs(1);
// answer.forEach((ans) => console.log(ans));
let result = "";
answer.forEach((ans) => (result += ans + "\n"));
console.log(result);
