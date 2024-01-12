/**
 * 1049번 [기타줄]
 * 2024.01.11.목요일
 * https://www.acmicpc.net/problem/1049
 *
 * 입력 : 끊어진 기타줄 수(n) 브랜드 수(m)/ 6개 묶음 가격 낱개 가격
 * 출력 : 기타줄을 적어도 N개 사기 위해 필요한 돈의 최솟값
 * point : 회의가 끝나는 시간이 빨라야 최대한 사용할 수 있다. 끝나는 시간 기준 오름차순 정렬
 */
let input = require("fs")
  .readFileSync("1. Greedy/input_1049.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
let [n, m] = input[0];
let list = input.slice(1);

let result = 0;

// 세트와 낱개의 목록에서 최소가격을 구한다
let minSet = Math.min(...list.map((item) => Number(item[0])));
let minPiece = Math.min(...list.map((item) => Number(item[1])));

while (true) {
  let set = Math.floor(n / 6); // 세트가 몇개 필요한지 구한다
  if (n < 6) {
    // 필요한 기타줄이 6개 미만일때
    result += Math.min(minPiece * n, minSet); // 낱개와 세트로 사는것중에 저렴한걸 찾는다
    break;
  } else {
    // 필요한 기타줄이 6개 이상일때
    result += Math.min(minSet * set, minPiece * (set * 6)); // 낱개와 세트로 사는것중에 저렴한걸 찾는다
    n -= 6 * set; // 구매한 줄의 갯수만큼 빼준다
  }
}

console.log(result);
