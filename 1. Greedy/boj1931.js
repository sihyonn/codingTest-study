// BOJ 1931 회의실 배정
// 2024. 01 .08
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const schedule = input.slice(1).map((arr) => arr.split(" "));
schedule.sort((a, b) => a[1] - b[1]);
schedule.sort((a, b) => a[0] - b[0]);

let count = 1;
let selectSchedule = schedule[0];
schedule.slice(1).forEach((nowSchedule) => {
  if (Number(nowSchedule[1]) < Number(selectSchedule[1])) {
    selectSchedule = [...nowSchedule];
  } else if (Number(nowSchedule[0]) >= Number(selectSchedule[1])) {
    count++;
    selectSchedule = [...nowSchedule];
  }
});
console.log(count);
