// boj silver1 2343
// 2024. 02.01
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const videos = input[1].split(' ').map(Number);
let left = Math.max(...videos);
let right = videos.reduce((acc, cur) => (acc += cur));
let mid;
let answer;
while (left <= right) {
  mid = Math.floor((left + right) / 2);
  let count = 1;
  let time = 0;
  for (let video of videos) {
    if (time + video <= mid) {
      time += video;
    } else {
      count += 1;
      time = video;
    }
  }
  if (count <= M) {
    answer = mid;
    right = mid - 1;
  }
  if (count > M) left = mid + 1;
}
console.log(answer);
