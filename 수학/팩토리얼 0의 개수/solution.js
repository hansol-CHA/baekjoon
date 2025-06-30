/**
 * 백준 문제 팩토리얼 0의 개수
 * 문제: https://www.acmicpc.net/problem/1676
 *
 * 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구함
 */

function solution(input) {
  const n = Number(input[0]);

  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    console.log(`i: ${i}, n: ${n}, 나누기 : ${Math.floor(n / i)}`);
    // 5의 배수로 나누어지는 횟수를 세어줌
    count += Math.floor(n / i);
  }

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
