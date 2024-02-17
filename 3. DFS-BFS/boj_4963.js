/**
 * 4963번 [섬의 개수]
 * 2024.02.16.금
 * https://www.acmicpc.net/problem/4963
 *
 * 입력 : 지도의 너비(w), 높이(h) / h개 줄에는 지도(map)
 * 출력 : 1은 땅 0은 바다일 때 가로, 세로, 대각선으로 연결되어 갈 수 있으면 하나의 섬일 때 섬의 개수 출력
 
 */

const fs = require('fs');
let input = fs.readFileSync('./input4963.txt').toString().split('\n');
const arr = input.map((v) => v.split(' ').map(Number));

let map, visited, width, height;

const island = () => {
  let result = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!visited[i][j] && map[i][j]) {
        result++;
        dfs(i, j);
      }
    }
  }
  console.log(result);
};

const dfs = (y, x) => {
  // 대각선까지 포함
  const d = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  // 현재 위치에서 인접한 좌표들 탐색
  for (let i = 0; i < 8; i++) {
    const ny = y + d[i][1];
    const nx = x + d[i][0];
    // 해당 좌표가 지도에서 벗어나지 않고, 방문하지 않았고, 땅인 경우, 방문처리하고 재귀함수 실행
    if (ny >= 0 && ny < height && nx >= 0 && nx < width && !visited[ny][nx] && map[ny][nx]) {
      visited[ny][nx] = true; // 방문처리
      dfs(ny, nx); // 재귀
    }
  }
};

for (let i = 0; i < arr.length - 1; i++) {
  [width, height] = arr[i];
  map = arr.slice(i + 1, i + height + 1);
  i += height;
  visited = Array.from(Array(height), () => Array(width).fill(false));

  island();
}
