/**
 * 2644번 [촌수계산]
 * 2024.02.16.금
 * https://www.acmicpc.net/problem/2644
 *
 * 입력 : 전체 사람 수(n) / 계산해야하는 두 사람 번호(total) / 부모 자식들 간 관계 수(m) / 부모 자식간 관계를 나타내는 번호(x, y)
 * 출력 : 1은 땅 0은 바다일 때 가로, 세로, 대각선으로 연결되어 갈 수 있으면 하나의 섬일 때 섬의 개수 출력
 * BFS
 */

const fs = require('fs');
let input = fs.readFileSync('./input2644.txt').toString().split('\n');
const total = +input[0];
const [p1, p2] = input[1].split(' ').map(Number);
const totalRelations = +input[2];
const relations = input.slice(3).map((line) => line.split(' ').map(Number));

const adjacencyList = Array.from({ length: total + 1 }, () => []);
const visited = Array.from({ length: total + 1 }, () => false);

if (total === 1) return console.log(-1);

for (let i = 0; i < totalRelations; i++) {
  let [personX, personY] = relations[i];
  adjacencyList[personX].push(personY);
  adjacencyList[personY].push(personX);
}

const bfs = (p1) => {
  const queue = [[p1, 0]];

  while (queue.length) {
    const [currentPerson, distance] = queue.shift();
    const neighbors = adjacencyList[currentPerson];

    if (visited[currentPerson]) continue;
    if (currentPerson === p2) return distance;

    visited[currentPerson] = true;

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (visited[neighbor]) continue;
      if (neighbor === p2) return distance + 1;

      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
};

console.log(bfs(p1));
