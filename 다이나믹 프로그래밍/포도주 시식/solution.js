/**
 * 백준 문제 포도주 시식
 * https://www.acmicpc.net/problem/2156
 * 문제 설명:
 * 포도주 시식 문제로, N개의 포도주 잔이 주어지고,
 * 각 잔에는 포도주의 양이 주어진다. 연속된
 * 포도주 잔을 3잔 이상 마실 수 없으며, 최대한
 * 많은 포도주를 마시는 방법을 구하는 문제입니다.
 * 입력 형식:
 * 첫째 줄에 포도주 잔의 개수 N이 주어진다.
 * (1 ≤ N ≤ 10000)
 * 둘째 줄에 각 포도주 잔의 포도주 양이 주어진다.
 * (0 ≤ 포도주 양 ≤ 10000)
 * 출력 형식:
 * 최대한 많은 포도주를 마시는 방법으로 얻을 수 있는
 * 포도주 양의 합을 출력합니다.
 * 예제 입력:
 * 6
 * 6 10 13 9 8 1 1
 * 예제 출력:
 * 33
 */

function solution(input) {
  const [N, ...wines] = input.map(Number);
  const dp = Array(N).fill(0);
  dp[0] = wines[0];

  for (let i = 1; i < N; i++) {
    if (i === 1) {
      dp[i] = dp[0] + wines[i];
      continue;
    }

    const 현재값포함안함 = dp[i - 1];
    const 현재포함직전 = wines[i] + wines[i - 1] + (dp[i - 3] || 0);
    const 현재포함직직전 = dp[i - 2] + wines[i];

    dp[i] = Math.max(현재값포함안함, 현재포함직전, 현재포함직직전);
  }

  console.log(dp[N - 1]);
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
