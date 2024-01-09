const fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const startNode = input[0].split(" ")[2];
const nodes = input.slice(1);
const graph = {};
answer = [];
nodes.forEach((node) => {
  const [A, B] = node.split(" ");
  if (graph[A]) graph[A].push(B);
  else graph[A] = [B];
  if (graph[B]) graph[B].push(A);
  else graph[B] = [A];
});

for (let key in graph) {
  graph[key].sort((a, b) => b - a);
}

function DFS(graph, start) {
  const stack = [];
  const visited = {};
  const dfs = [];
  stack.push(start);
  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (visited[currentNode]) continue;
    visited[currentNode] = true;
    dfs.push(currentNode);
    if (graph[currentNode] > 0) {
      graph[currentNode].forEach((node) => {
        if (!visited[node]) {
          stack.push(node);
        }
      });
    }
  }
  return dfs;
}
answer.push(DFS(graph, startNode).join(" "));
for (let key in graph) {
  graph[key].sort((a, b) => a - b);
}

function BFS(graph, start) {
  const deque = [];
  const visited = {};
  const bfs = [];
  deque.push(start);
  visited[start] = true;
  while (deque.length > 0) {
    let currentNode = deque.shift();
    bfs.push(currentNode);
    if (graph[currentNode.length > 0]) {
      graph[currentNode].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          deque.push(node);
        }
      });
    }
  }
  return bfs;
}
answer.push(BFS(graph, startNode).join(" "));
console.log(answer.join("\n"));
