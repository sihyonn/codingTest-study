// BOJ 1715
// 2024. 01. 09
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class Heap {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.push(value);
    this.bubbleUp();
  }

  extract() {
    [this.data[0], this.data[this.data.length - 1]] = [
      this.data[this.data.length - 1],
      this.data[0],
    ];
    const minNumber = this.data.pop();
    this.sinkDown();
    return minNumber;
  }

  bubbleUp() {
    let currentIdx = this.data.length - 1;
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.data[currentIdx] < this.data[parentIdx]) {
        [this.data[parentIdx], this.data[currentIdx]] = [
          this.data[currentIdx],
          this.data[parentIdx],
        ];
        currentIdx = parentIdx;
      } else break;
    }
  }

  sinkDown() {
    let currentIdx = 0;
    while (true) {
      let leftChild = this.data[currentIdx * 2 + 1];
      let rightChild = this.data[currentIdx * 2 + 2] || Infinity;
      if (leftChild <= rightChild) {
        if (this.data[currentIdx] > leftChild) {
          [this.data[currentIdx], this.data[currentIdx * 2 + 1]] = [
            this.data[currentIdx * 2 + 1],
            this.data[currentIdx],
          ];
          currentIdx = currentIdx * 2 + 1;
        } else if (this.data[currentIdx] > rightChild) {
          [this.data[currentIdx], this.data[currentIdx * 2 + 2]] = [
            this.data[currentIdx * 2 + 2],
            this.data[currentIdx],
          ];
          currentIdx = currentIdx * 2 + 2;
        } else break;
      } else if (leftChild > rightChild) {
        if (this.data[currentIdx] > rightChild) {
          [this.data[currentIdx], this.data[currentIdx * 2 + 2]] = [
            this.data[currentIdx * 2 + 2],
            this.data[currentIdx],
          ];
          currentIdx = currentIdx * 2 + 2;
        } else if (this.data[currentIdx] > leftChild) {
          [this.data[currentIdx], this.data[currentIdx * 2 + 1]] = [
            this.data[currentIdx * 2 + 1],
            this.data[currentIdx],
          ];
          currentIdx = currentIdx * 2 + 1;
        } else break;
      } else break;
    }
  }
  print() {
    console.log(this.data);
  }
}

const heap = new Heap();

const cards = input.slice(1).map(Number);
cards.forEach((card) => heap.add(card));

let answer = 0;
if (heap.data.length === 1) console.log(0);
else {
  while (heap.data.length > 1) {
    const A = heap.extract();
    const B = heap.extract();
    heap.add(A + B);
    answer += A + B;
  }
  console.log(answer);
}
