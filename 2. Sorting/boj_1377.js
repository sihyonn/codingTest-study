/*
 * 백준 1377번 [버블 소트] -> 공통 문제
 * 2024.01.15.월
 */

const fs = require('fs');
let input = fs.readFileSync('./input_boj1377.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

/* 우선순위 큐 사용 -> 해당부분에 대한 구현 고민 */

// 우선순위 큐 구현을 위한 MinHeap 구현
class MinHeap {
  // 기본 구성
  constructor() {
      this.heap = [];
  }

  // 
  getLength() {
      return this.heap.length;
  };

  // tree 형태로 구성 된 heap에 element 삽입
  push(node) {
      this.heap.push(node);
      let i = this.heap.length - 1; // i : 새로 추가된 node의 index
      let parentIndex = Math.floor((i - 1) / 2);  // 새로 추가된 index의 부모 node index
      // 첫번째 element가 아니고, 
      // 같은 node 위치 상에서 parent 요소의 크기가 현재 node 값보다 큰 경우
      while (i > 0 && this.heap[parentIndex] > this.heap[i]) {
          this.swap(i, parentIndex);
          i = parentIndex;
          parentIndex = Math.floor((i - 1) / 2);
      }
  };

  // 우선순위가 높은 node를 제거하고 해당 제거값을 반환하는 method
  // 반복 이해 필요
  pop() {
    // case1. heap에 node 1개만 있는 경우
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    // case2. node가 2개 이상 존재할 경우
    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    // 현재 node의 자식 node와 값을 비교하여 위치 조정하면서 아래로 내려감
    while (true) {
      // 현재 node의 좌측, 우측 index 정의
      const leftIndex = i * 2 + 1,
      rightIndex = i * 2 + 2;
      if (leftIndex >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftIndex]) {
          nextI = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[nextI] > this.heap[rightIndex]) {
        nextI = rightIndex;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap(a, b) {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
  };
}

const N = input[0];
const minHeap = new MinHeap();
for (let i = 1; i < input.length; i++) {
  minHeap.push(+input[i]);
}
let result = 0;
if (N === 1) {
  return console.log(value);
}

// 입력값이 2개 이상의 경우
while (minHeap.getLength() > 1) {
  let first = minHeap.pop();
  let second = minHeap.pop();
  let sum = first + second;
  result += sum;
  minHeap.push(sum);
}

console.log(result);