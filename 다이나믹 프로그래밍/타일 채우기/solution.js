/**
 * 백준 문제 타일 채우기
 * https://www.acmicpc.net/problem/2133
 * 문제 설명:
 * 3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구하는 문제입니다.
 * 입력 형식:
 * 첫째 줄에 N이 주어진다. (1 ≤ N ≤ 30)
 * 출력 형식:
 * 첫째 줄에 경우의 수를 출력한다.
 * 예제 입력:
 * 2
 * 예제 출력:
 * 3
 */

function solution(input) {
  const N = Number(input[0]);
  const dp = Array(N + 1).fill(0);

  if (N % 2 === 1) {
    console.log(0);
    return;
  }

  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i - 2] * 3;

    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
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
