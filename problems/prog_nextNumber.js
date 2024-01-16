// 프로그래머스 레벨2 다음 큰숫자
function solution(n) {
  let countN = Number(n).toString(2).split('1').length
  while (true) {
    const nextNumber = n + 1
    if (countN === Number(nextNumber).toString(2).split('1').length) return nextNumber
    n++
  }
}
console.log(solution(78))
