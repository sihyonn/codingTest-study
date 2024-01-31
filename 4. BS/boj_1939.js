/**
 * 1939번[중량제한]
 * 2023.01.31.수
 * https://www.acmicpc.net/problem/1939
 *
 * 입력 : 섬 개수(n), 다리 정보개수(m) /
 *       m개의 다리에 대한 정보 - 섬1(a), 섬2(b), 중량제한(c) /
 *       공장이 위치한 섬 번호1(island1), 번호2(island2)
 * 출력 : 한 번의 이동에서 옮길 수 있는 물품들의 중량의 최댓값
 * POINT : BS로 한 번 이동으로 옮길 물품중량 찾고, BFS로 두 공장 사이 오갈 수 있는지 확인
 */
const fs = require('fs');
let input = fs.readFileSync('./input1939.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let [start, end] = input[m + 1].split(' ').map(Number);

let island = new Array(n + 1).fill(null).map((_) => []);
let max = 0;
for (let i = 1; i <= m; i++) {
  let [from, to, weight] = input[i].split(' ').map(Number);
  if (weight > max) max = weight;
  island[from].push([to, weight]);
  island[to].push([from, weight]);
}

function bs(n, island, start, end, max) {
  let left = 1;
  let right = max;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (BFS(n, island, start, end, mid)) left = mid + 1;
    else right = mid - 1;
  }
  console.log(right);
}

function BFS(n, island, start, end, mid) {
  let visited = new Array(n + 1).fill(false);
  let queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    let cur = queue.shift();
    visited[cur] = true;
    if (cur === end) return true; // 현재위치가 목적지 섬이라면 이동 가능한것으로 판단

    for (let i = 0; i < island[cur].length; i++) {
      let next = island[cur][i][0];
      let nextCost = island[cur][i][1];
      if (!visited[next] && mid <= nextCost) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return false;
}

bs(n, island, start, end, max);
