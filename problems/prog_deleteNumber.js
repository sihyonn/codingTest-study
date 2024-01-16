// 프로그래머스 레벨2 짝지어제거하기
// 2024. 01. 14
function solution(s) {
  const stack = []
  stack.push(s[0])
  for (let i = 1; i < s.length; i++) {
    if (stack.at(-1) === s[i]) stack.pop()
    else stack.push(s[i])
  }
  if (stack.length === 0) return 1
  return 0
}
