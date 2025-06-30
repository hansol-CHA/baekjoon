/**
 * 백준 문제 1,2,3 더하기 5
 * https://www.acmicpc.net/problem/15990
 * 문제 설명: 정수 N이 주어졌을 때, 1, 2, 3의 합으로 N을 만들 수 있는 방법의 수를 구하는 문제입니다.
 * 단, 같은수를 연속해서 사용할 수 없습니다.
 * 입력: 첫째 줄에 정수 T (1 ≤ T ≤ 1,000)와 T개의 테스트 케이스가 주어집니다.
 * 각 테스트 케이스는 정수 N (1 ≤ N ≤ 1,000,000)입니다.
 * 출력: 각 테스트 케이스마다 1, 2, 3의 합으로 N을 만들 수 있는 방법의 수를 출력합니다.
 * 단, 결과는 1,000,000,007로 나눈 나머지를 출력합니다.
 * 3
 * 4
 * 7
 * 10
 * 예시 출력:
 * 3
 * 9
 * 27
 */

function solution(input) {
  const [_, ...testCases] = input.map(Number);
  const MOD = 1000000009;

  const maxN = Math.max(...testCases);
  const dp = Array.from({ length: maxN + 1 }, () => [0, 0, 0]);

  dp[1][0] = 1; // 마지막이 1
  dp[2][1] = 1; // 마지막이 2
  dp[3][0] = 1; // 2 + 1
  dp[3][1] = 1; // 1 + 2
  dp[3][2] = 1; // 3

  for (let i = 4; i <= maxN; i++) {
    const first = dp[i - 1][1] + dp[i - 1][2]; // 1을 마지막에 사용
    const second = dp[i - 2][0] + dp[i - 2][2]; // 2를 마지막에 사용
    const third = dp[i - 3][0] + dp[i - 3][1]; // 3을 마지막에 사용

    dp[i] = [
      first % MOD, // 1을 마지막에 사용한 경우
      second % MOD, // 2를 마지막에 사용한 경우
      third % MOD, // 3을 마지막에 사용한 경우
    ];
  }

  console.log(
    testCases
      .map((n) => {
        return (dp[n][0] + dp[n][1] + dp[n][2]) % MOD;
      })
      .join("\n")
  );
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
