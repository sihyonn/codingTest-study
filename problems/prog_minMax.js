// 프로그래머스 level2 최댓값과 최솟
// 2024. 01. 11
function solution(s) {
  const array = s.split(' ')
  return `${Math.min(...array)} ${Math.max(...array)}`
}
