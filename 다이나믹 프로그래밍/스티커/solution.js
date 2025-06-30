/**
 * 백준 문제 스티커
 * https://www.acmicpc.net/problem/9465
 * 문제 설명:
 * 스티커를 붙이는 문제로, 2개의 행과 N개의 열로 이루어진 스티커를 붙이는 방법을 구하는 문제입니다.
 * 각 행의 스티커는 서로 붙어있지 않도록 붙여야 하며, 각 열의 스티커는 서로 붙어있지 않도록 붙여야 합니다.
 * 입력 형식:
 * 첫째 줄에 테스트 케이스의 수 T가 주어집니다. (1 ≤ T ≤ 1000)
 * 각 테스트 케이스의 첫째 줄에 N이 주어집니다. (1 ≤ N ≤ 1000)
 * 둘째 줄에 첫 번째 행의 스티커 점수가 주어집니다.
 * 셋째 줄에 두 번째 행의 스티커 점수가 주어집니다.
 * 출력 형식:
 * 각 테스트 케이스마다 스티커를 붙이는 방법의 최대 점수를 출력합니다.
 * 예제 입력:
 * 2
 * 5
 * 50 10 100 20 40
 * 30 50 70 10 60
 * 7
 * 10 30 10 50 100 20 40
 * 20 40 30 50 10 60 70
 * 예제 출력:
 * 260
 * 300
 */

function solution(input) {
  const result = [];

  for (let i = 1; i < input.length; i += 3) {
    const N = parseInt(input[i]);
    const firstRow = input[i + 1].split(" ").map(Number);
    const secondRow = input[i + 2].split(" ").map(Number);

    const dp = Array.from({ length: N }, () => Array(3).fill(0));

    for (let j = 0; j < N; j++) {
      if (j === 0) {
        dp[j][0] = firstRow[j];
        dp[j][1] = secondRow[j];
      } else if (j === 1) {
        dp[j][0] = dp[0][1] + firstRow[j];
        dp[j][1] = dp[0][0] + secondRow[j];
        dp[j][2] = Math.max(dp[0][0], dp[0][1]);
      } else {
        dp[j][0] = Math.max(dp[j - 1][1], dp[j - 2][1]) + firstRow[j];
        dp[j][1] = Math.max(dp[j - 1][0], dp[j - 2][0]) + secondRow[j];
      }
    }

    const maxScore = Math.max(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
    result.push(maxScore);
  }

  console.log(result.join("\n"));
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
