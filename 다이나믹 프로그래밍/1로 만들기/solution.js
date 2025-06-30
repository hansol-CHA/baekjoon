/**
 * 백준 문제 1로 만들기
 * https://www.acmicpc.net/problem/1463
 * 문제 설명: 정수 N이 주어졌을 때, 1로 만들기 위한 최소 연산 횟수를 구하는 문제입니다.
 * 연산은 다음과 같습니다:
 * 1. N이 3으로 나누어 떨어지면, N을 3으로 나눈다.
 * 2. N이 2로 나누어 떨어지면, N을 2로 나눈다.
 * 3. N에서 1을 뺀다.
 *
 * 입력: 첫째 줄에 정수 N (1 ≤ N ≤ 10^6)이 주어집니다.
 * 출력: 첫째 줄에 1로 만들기 위한 최소 연산 횟수를 출력합니다.
 *
 * * 이 문제는 동적 계획법(Dynamic Programming)을 사용하여 해결할 수 있습니다.
 */

function solution(input) {
  const N = Number(input[0]);

  const dp = Array(N + 1).fill(0);

  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= N; i++) {
    let minOperations = dp[i - 1] + 1;

    if (i % 3 === 0) {
      minOperations = Math.min(dp[i / 3] + 1, minOperations);
    }

    if (i % 2 === 0) {
      minOperations = Math.min(dp[i / 2] + 1, minOperations);
    }

    dp[i] = minOperations;
  }

  console.log(dp[N]);
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
