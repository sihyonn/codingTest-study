const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[1]);
const nodeList = input.slice(2).map((arr) => arr.split(' '));

const graph = new Array(N + 2).fill().map(() => []);
const parents = new Array(N + 2).fill(0);

for (const [nodeA, nodeB] of nodeList) {
  graph[nodeA].push(nodeB);
  graph[nodeB].push(nodeA);
}

const queue = [2];
while (queue.length > 1) {
  const node = queue.shift();
  for (const child of graph[node]) {
    if (parents[child] === 1) {
      parents[child] = node;
      queue.push(child);
    }
  }
}

parents.join('\n');
