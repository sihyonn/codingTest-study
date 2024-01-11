// 프로그래머스 레벨2 JadenCase 문자열 만들기
// 2024. 01. 11

function solution(str) {
  const answer = []
  const strArray = str.split(' ')
  strArray.forEach((arr) => {
    answer.push(arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase())
  })
  return answer.join(' ')
}
