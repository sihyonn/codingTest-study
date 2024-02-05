/*
 * 백준 2606번 [바이러스] -> 공통 문제
 * 2024.02.05.월
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2606.txt')
  .toString()
  .split('\n');
let node = +input[0];
let edge_num = +input[1];
// 0번째 index는 사용하지 않고, 대신 제시된 번호에 맞도록 뒤에 index 한 개를 추가하도록 한다.
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(0);
let ans = 0;  // 바이러스에 걸린 컴퓨터 대수

// 그래프 생성
for (let i = 0; i < edge_num; i++) {
  let start = Number(input[i + 2].split(" ")[0]);
  let end = Number(input[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

// console.log(graph);

// 1번노드 방문처리해주고 dfs 시작
visited[1] = 1;
function dfs(start) {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      ans++;
      dfs(end);
    }
  }
}
dfs(1);
console.log(ans);


