//boj 1377 버블소트
//2024. 01. 16
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const data = input.slice(1)
const indexData = []
data.forEach((dt, idx) => {
  indexData.push([dt, idx])
})
indexData.sort((a, b) => a[0] - b[0])
const subIndex = []
indexData.forEach((data, idx) => {
  subIndex.push(data[1] - idx)
})
console.log(Math.max(...subIndex) + 1)
