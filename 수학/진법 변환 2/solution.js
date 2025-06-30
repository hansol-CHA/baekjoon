/**
 * 백준 문제 진법 변환 2
 * https://www.acmicpc.net/problem/11005
 *
 * 문제 설명:
 * 주어진 정수 n을 b진법으로 변환하는 함수.
 *
 * 입력:
 * 첫 번째 줄에 n과 b가 주어집니다. (1 ≤ n ≤ 1,000,000,000, 2 ≤ b ≤ 36)
 *
 * 출력:
 * n을 b진법으로 변환한 결과를 출력합니다.
 * 10 이상의 숫자는 A, B, C, ..., Z로 표현합니다.
 *
 * 예시:
 * 입력: 255 16
 * 출력: FF
 */

function solution(input) {
  const [n, b] = input[0].split(" ").map(Number);

  //   console.log(Number(n).toString(b).toUpperCase());

  console.log(Number(n).toString(b).toUpperCase());
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);

  process.exit();
});
