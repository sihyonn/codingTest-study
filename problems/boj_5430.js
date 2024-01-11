// solution boj_5430
// 2024. 01. 11
// 리팩토링 필요.... 살짝 지쳐서 isPass isBreak 사용했는데, for문 사용하면 좀더 깔끔하게 될것 같다!
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')

const T = Number(input[0])

for (let i = 0; i < T; i++) {
  const p = input.at(1 + i * 3).split('')
  const array = input
    .at(i * 3 + 3)
    .slice(1, -1)
    .split(',')
  let R = false
  let isPass = true
  let isBreak = false
  p.forEach((arr) => {
    if (isBreak) return
    if (arr === 'R') R = !R
    if (arr === 'D') {
      if (array.length === 0 || array[0] === '') {
        isPass = false
        isBreak = true
        console.log('error')
      } else R ? array.pop() : array.shift()
    }
  })

  if (isPass) R ? console.log(`[${array.reverse().join(',')}]`) : console.log(`[${array.join(',')}]`)
}
