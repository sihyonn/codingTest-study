// boj 1541 잃어버린 괄호
// 2024. 01. 10
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()

const regEx = /([-+])/g
const expression = input.split(regEx)
const newExpression = expression.map((arr) => {
  if (Number.isInteger(Number(arr))) return parseInt(arr, 10)
  return arr
})

while (newExpression.includes('+')) {
  for (let i = 1; i < newExpression.length; i++) {
    if (newExpression[i] === '+') {
      newExpression.splice(i - 1, 3, eval(newExpression.slice(i - 1, i + 2).join('')))
    }
  }
}
console.log(eval(newExpression.join('')))
