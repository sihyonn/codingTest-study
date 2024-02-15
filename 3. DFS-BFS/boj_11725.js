/**
 * 11725번 [트리의 부모 찾기]
 * 2024.02.15.목
 * https://www.acmicpc.net/problem/11725
 *
 * 입력 : 노드 개수(n) / 트리상의 연결된 두 정점들 ...
 * 출력 : 첫째줄 부터 n-1개 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력
 * 1. 입력된 정보로 그래프 생성
 * 2. queue에 루트 노드 1 넣고
 * 3. queue에서 하나씩 꺼내서 자식 노드 검사
 * 4. 자식 노드 아직 방문 안했으면 자식노드 방문표시, 큐에 자식 노드 Push, 부모를 저장해줌 result[자식] = 부모
 * 5. 큐가 빌때까지 3,4반복
 */

const fs = require('fs');
let input = fs.readFileSync('./input11725.txt').toString().split('\n');
const n = Number(input[0]);
const tree = Array(n + 1)
  .fill(null)
  .map(() => []);
// a -> b, b -> a 연결된 두 정점을 토대로 tree에 넣어주기
input.slice(1).forEach((v) => {
  const [from, to] = v.split(' ').map(Number);
  tree[from].push(to);
  tree[to].push(from);
});
// 방문 여부
let visit = Array.from({ length: n + 1 }, () => false);
let result = Array.from({ length: n + 1 }, () => 0);

function solution(n, tree) {
  const queue = [];
  visit[1] = true;
  queue.push(1);

  while (queue.length > 0) {
    //큐에서 꺼낸 건 부모
    const parent = queue.shift();

    for (let i = 0; i < tree[parent].length; i++) {
      const children = tree[parent][i];
      if (!visit[children]) {
        visit[children] = true;
        queue.push(children);
        result[children] = parent;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    console.log(result[i]);
  }
}
solution(n, tree);
