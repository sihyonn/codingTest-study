// 이중 우선순위 큐
// 2024. 01 .10
function solution(operations) {
  const dequeue = []
  operations.forEach((op) => {
    if (op[0] === 'I') {
      dequeue.push(Number(op.split('I ')[1]))
      dequeue.sort((a, b) => a - b)
    } else if (op === 'D 1') dequeue.pop()
    else dequeue.shift()
  })
  if (dequeue.length === 0) return [0, 0]
  return [Math.max(...dequeue), Math.min(...dequeue)]
}

console.log(solution(operations))
