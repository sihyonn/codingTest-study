// 프로그래머스 레벨2 올바른 괄호
// 2024. 01. 11
function solution(s) {
  const array = s.split('')
  const stack = []
  for (let arr of array) {
    if (arr === '(') stack.push('(')
    else {
      if (stack.length > 0) stack.pop()
      else return false
    }
  }
  return stack.length > 0 ? false : true
}
