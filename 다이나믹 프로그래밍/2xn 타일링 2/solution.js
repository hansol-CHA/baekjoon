/**
 * 백준 문제 2Xn 타일링 2
 * 문제 링크: https://www.acmicpc.net/problem/11727
 * 문제 설명: 2Xn 크기의 직사각형을 1X2, 2*1, 2X2 타일로 채우는 방법의 수를 구하는 문제입니다.
 * 입력: 첫째 줄에 n (1 ≤ n ≤ 1,000)이 주어집니다.
 * 출력: 첫째 줄에 2Xn 타일링 방법의 수를 10,007로 나눈 나머지를 출력합니다.
 */

function solution(input) {
  const N = Number(input[0]);

  const dp = Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
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
