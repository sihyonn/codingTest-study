/*
 * 백준 2606번 [바이러스] -> 공통 문제
 * 2024.02.05.월
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2606.txt')
  .toString()
  .trim()
  .split('\n');

const num_com = +input[0];
const num_connect = +input[1];

let graph = {};

for (let i=0; i < num_com; i++){
  graph.i = 'a';
}

console.log(graph);


