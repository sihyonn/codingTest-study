/**
 * 1715번 [카드 정렬하기]
 * 2024.01.10.수요일
 * https://www.acmicpc.net/problem/1715
 *
 * 입력 : 카드묶음 개수(n) / 각 카드 묶음크기
 * 출력 : 최소 비교 횟수
 * 포인트 : 우선순위 큐를 활용해서 가장작은값들이 누적되도록
 */

const fs = require('fs');
let input = fs.readFileSync('./input1715.txt').toString().split('\n');

const n = Number(input[0]);
let cards = input.slice(1).map(Number);

class Heap {
  constructor() {
    this.heap = [];
  }

  // 값 서로 바꾸는 메서드
  swap(idx1, idx2) {
    let tmp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = tmp;
  }

  // 인덱스 구하는 메서드들
  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  findLeftChildIdx(idx) {
    return idx * 2 + 1;
  }
  findRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  // 노드 구하는 메서드들
  findParent(idx) {
    return this.heap[this.findParentIdx(idx)];
  }
  findLeftChild(idx) {
    return this.heap[this.findLeftChildIdx(idx)];
  }
  findRightChild(idx) {
    return this.heap[this.findRightChildIdx(idx)];
  }

  // 최대힙 = 최대값 반환, 최소힙 = 최소값 반환 메서드
  peek() {
    return this.heap[0];
  }

  //힙의 크기를 반환하는 메서드
  size() {
    return this.heap.length;
  }
}

class MinHeap extends Heap {
  // 새로운 요소 추가할때 재조정에 사용되는 메서드(부모요소보다 값이 작으면 계속 타고올라가기)
  bubbleUp() {
    let idx = this.heap.length - 1;
    while (
      this.findParent(idx) !== undefined &&
      this.findParent(idx) > this.heap[idx]
    ) {
      this.swap(idx, this.findParentIdx(idx));
      idx = this.findParentIdx(idx);
    }
  }
  // 기존 요소 삭제할때 재조정에 사용되는 메서드(꺼내진 루트자리에 맨 마지막요소 넣고 내려가도록)
  bubbleDown() {
    let idx = 0;
    while (
      this.findLeftChild(idx) !== undefined &&
      (this.findLeftChild(idx) < this.heap[idx] ||
        this.findRightChild(idx) < this.heap[idx])
    ) {
      let smallerIdx = this.findLeftChildIdx(idx);
      if (
        this.findRightChild(idx) !== undefined &&
        this.findRightChild(idx) < this.heap[smallerIdx]
      ) {
        smallerIdx = this.findRightChildIdx(idx);
      }
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }

  add(heap) {
    this.heap[this.heap.length] = heap;
    this.bubbleUp();
  }
  poll() {
    let heap = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown();
    return heap;
  }
}

//문제풀이
function solution(n, cards) {
  let sum = 0;
  let total = 0;
  const minHeap = new MinHeap();
  for (let i = 0; i < n; i++) {
    minHeap.add(cards[i]);
  }

  while (minHeap.size() > 1) {
    let a = minHeap.poll();
    let b = minHeap.poll();
    sum = a + b;
    total += sum;
    minHeap.add(sum);
  }
  console.log(total);
}

solution(n, cards);
