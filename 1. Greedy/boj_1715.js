/**
 * 1715번 [카드 정렬하기]
 * 2024.01.10.수요일
 * https://www.acmicpc.net/problem/1715
 *
 * 입력 : 숫자 카드 묶음 수(n)/ 숫자 카드 묶음의 각각의 크기
 * 출력 : 첫째 줄에 최소 비교 횟수
 * point : 최소힙을 사용하자
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}

const input = require("fs")
  .readFileSync("1. Greedy/input_1715.txt")
  .toString()
  .trim()
  .split("\n");

const minHeap = new MinHeap();
for (let i = 1; i < input.length; i++) {
  minHeap.push(+input[i]);
}

let totalCompareCount = 0;
while (minHeap.getLength() > 1) {
  let aCount = minHeap.pop();
  let bCount = minHeap.pop();
  let compareCount = aCount + bCount;
  totalCompareCount += compareCount;
  minHeap.push(compareCount);
}
console.log(totalCompareCount);
