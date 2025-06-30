/**
 * 백준 문제 조합 0의 개수
 * https://www.acmicpc.net/problem/2004
 * * 문제 설명:
 * n개 중 m개를 고르는 경우의 수
 */

function countFactor(num, factor) {
  let count = 0;
  for (let i = factor; i <= num; i *= factor) {
    count += Math.floor(num / i);
  }
  return count;
}

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);

  let count = 0;

  const count2 = countFactor(n, 2) - countFactor(m, 2) - countFactor(n - m, 2);
  const count5 = countFactor(n, 5) - countFactor(m, 5) - countFactor(n - m, 5);
  count = Math.min(count2, count5);

  console.log(count);
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
