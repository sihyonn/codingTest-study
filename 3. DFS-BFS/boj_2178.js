/**
 * 2178번 [미로 탐색]
 * 2024.02.15.수
 * https://www.acmicpc.net/problem/2178
 *
 * 입력 : N, M => 목적지 칸
 * 출력 : 1인 칸만 거쳐서 목적지칸 까지 가기 위해 지나야하는 최소 칸 수
 * 알고리즘 : BFS
 */

const fs = require('fs');
const input = fs.readFileSync('./input2178.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split('').map(Number));
const [goalY, goalX] = [n - 1, m - 1]; // 도착 칸
let p = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]; // 상, 하, 좌, 우 인접칸

function solution(n, m, map, goalX, goalY, p) {
  const queue = [[0, 0, 1]]; // x, y, 움직인칸 수

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (goalY === curY && goalX == curX) {
      console.log(move); // 목적지에 도달하면 움직인 칸 수 출력
      return;
    }

    // 인접한 네 방향 탐색
    for (let i = 0; i < 4; i++) {
      const ny = curY + p[i][0];
      const nx = curX + p[i][1];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m && map[ny][nx]) {
        map[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx, move + 1]); // 다음 위치에 넣고 한칸 이동
      }
    }
  }
}

solution(n, m, map, goalX, goalY, p);
