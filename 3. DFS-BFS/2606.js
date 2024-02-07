//바이러스
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const nodeNumber = input[1];
const nodeList = input.slice(2).map((node) => node.split(' '));
const graph = {};

if (nodeNumber === '0') {
  console.log(0);
} else {
  nodeList.forEach((node) => {
    if (graph[node[0]]) graph[node[0]].push(node[1]);
    else graph[node[0]] = [node[1]];
    if (graph[node[1]]) graph[node[1]].push(node[0]);
    else graph[node[1]] = [node[0]];
  });

  const visited = {};
  const stack = [];
  stack.push('1');
  visited['1'] = true;
  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    const currentNode = graph[current];
    count++;
    currentNode.map((node) => {
      if (!visited[node]) {
        stack.push(node);
        visited[node] = true;
      }
    });
  }
  console.log(count - 1);
}
