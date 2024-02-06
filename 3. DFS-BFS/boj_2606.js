/**
 * boj_2606[바이러스]
 * 입력 : 컴퓨터 수, 연결되는 컴퓨터 쌍의 수, 직접연결되어 있는 컴퓨터의 번호 쌍
 * 출력 : 1번 컴퓨터가 바이러스 걸렸을 때, 1번 컴퓨터를 통해 바이러스에 걸리게되는 컴퓨터 개수
 */

/*
입력정제
1. 컴퓨터수 = node(정점) 수 = n
2. 컴퓨터 쌍의 수 = vertex(간선) 수 = v
3. 연결된 컴퓨터 쌍 = graph = g
*/

const fs = require('fs');
let input = fs.readFileSync('./input2606.txt').toString().split('\n');
const n = Number(input[0]);
const v = Number(input[1]);

/**
 * 그래프 정보 입력
 * 1. 빈배열 생성
 * 2. 1~노드 개수 만큼 [] 빈배열로 채워주기 => 이중리스트 생성
 * 3. i = 2 ~ v+1만큼 돌면서 x,y로 분해할당받아서 양방향으로 푸시해주기
 */
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= v + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = Array(n + 1).fill(false);

/**
 * dfs 구현
 * 1. 현재노드 방문처리
 * 2. 연결된 노드의 graph의 값 돌면서 방문안했으면 dfs 재귀
 */
function dfs(x) {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}
dfs(1);
console.log(cnt - 1);
