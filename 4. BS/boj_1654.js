const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let [kn, ...cable] = input;
let num = kn.split(' ')[1];
const cables = cable.map((la) => Number(la));
let end = Math.max(...cables);
let start = 1;
while (start <= end) {
  let count = 0;
  let mid = Math.floor((start + end) / 2);
  cables.forEach((cable) => (count += Math.floor(cable / mid)));

  if (count >= num) start = mid + 1;
  else end = mid - 1;
}
console.log(end);
