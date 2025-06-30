/**
 * 백준 문제 RGB 거리 2
 * https://www.acmicpc.net/problem/17404
 * 문제 설명:
 * RGB 거리 2 문제는 주어진 집들의 색칠 비용을 최소화하는 방법을 찾는 문제입니다.
 * 각 집은 빨강(R), 초록(G), 파랑(B) 중 하나의 색으로 칠할 수 있으며,
 * 인접한 집들은 같은 색으로 칠할 수 없습니다.
 * 주어진 비용 배열을 기반으로 최소 비용을 계산하는 것이 목표입니다.
 * 입력 형식:
 * 첫째 줄에 집의 수 N이 주어집니다.
 * 둘째 줄부터 N개의 줄에 걸쳐 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어집니다.
 * 출력 형식:
 * 첫째 줄에 모든 집을 칠하는 최소 비용을 출력합니다.
 * 예제 입력:
 * 3
 * 26 40 83
 * 49 60 57
 * 13 89 99
 * 예제 출력:
 * 96
 */

function solution(input) {
  const [N, ...costs] = input;
  const rgb = costs.map((cost) => cost.split(" ").map(Number));

  let answer = Infinity;

  for (let start = 0; start < 3; start++) {
    const dp = Array.from({ length: N }, () => Array(3).fill(Infinity));
    dp[0][start] = rgb[0][start];

    for (let i = 1; i < N; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0];
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i][1];
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2];
    }

    // 마지막 집에서 시작 색과 다른 경우만 고려
    for (let end = 0; end < 3; end++) {
      if (end !== start) {
        answer = Math.min(answer, dp[N - 1][end]);
      }
    }
  }

  console.log(answer);
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
