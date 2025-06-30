/**
 * 백준 문제 1, 2, 3 더하기
 * 문제 링크: https://www.acmicpc.net/problem/9095
 * 문제 설명: 정수 N이 주어졌을 때, 1, 2, 3의 합으로 N을 만드는 방법의 수를 구하는 문제입니다.
 * 입력: 첫째 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 11000)가 주어집니다.
 *        다음 T줄에는 정수 N (1 ≤ N ≤ 11)이 주어집니다.
 * 출력: 각 테스트 케이스마다 N을 1, 2, 3의 합으로 만드는 방법의 수를 출력합니다.
 *
 *
 */

function solution(input) {
  const [_, ...cases] = input.map(Number);

  const maxN = Math.max(...cases);
  const dp = Array(maxN + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= maxN; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(cases.map((n) => dp[n]).join("\n"));
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
