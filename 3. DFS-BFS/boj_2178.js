/**
 * 2178 [미로탐색]
 * 2024.02.16
 * https://www.acmicpc.net/problem/2178
 *
 * 입력 : 두 정수 n,m / N개의 줄에는 M개의 정수로 미로
 * 출력 : 첫째 줄에 지나야 하는 최소의 칸 수
 * point :
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "3. DFS-BFS/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const [goalY, goalX] = [N - 1, M - 1]; // 도착 위치
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 인접(좌우상하)한 칸들

// BFS
const bfs = () => {
  const queue = [[0, 0, 1]]; // 좌표 및 움직인 칸 수
  while (queue.length) {
    console.log(queue);
    const [curY, curX, move] = queue.shift();

    // 현재 위치가 도착 지점에 도달하면 움직인 칸 수 반환
    if (goalY === curY && goalX === curX) return move;

    // 다음 이동할 인접 위치 탐색을 위한 반복문
    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];

      // 다음 위치가 미로 밖으로 벗어나지 않고 길이 있는 곳(1)이면
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && maze[ny][nx]) {
        maze[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx, move + 1]); // 다음 위치넣고 한 칸 이동
      }
    }
  }
};

console.log(bfs());
