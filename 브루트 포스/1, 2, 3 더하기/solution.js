/**
 * 백준 문제 1, 2, 3 더하기
 * https://www.acmicpc.net/problem/9095
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수
 */

function solution(input) {
  const [N, ...numbers] = input.map(Number);

  const maxNum = Math.max(...numbers);

  const dp = Array(maxNum + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= maxNum; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(numbers.map((num) => dp[num]).join("\n"));
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
