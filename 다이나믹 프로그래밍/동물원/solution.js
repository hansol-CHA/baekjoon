/**
 * 백준 문제 동물원
 * https://www.acmicpc.net/problem/1309
 * 문제 설명:
 * 동물원에는 N마리의 동물이 있다. 동물원은 2차원 배열로 표현되며,
 * 각 동물은 가로로도 세로로도 붙어 있게 배치할 수는 없다
 * 사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 센다.
 * 동물원에 있는 동물의 수 N이 주어졌을 때, 동물원을 배치하는
 * 경우의 수를 출력하는 프로그램을 작성하시오.
 * 입력 형식:
 * 첫째 줄에 동물의 수 N이 주어진다. (1 ≤ N ≤ 1000)
 * 출력 형식:
 * 동물원을 배치하는 경우의 수를 출력한다.
 * 예제 입력:
 * 3
 * 예제 출력:
 *  5
 */

function solution(input) {
  const N = parseInt(input[0]);
  const MOD = 9901;
  const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
  dp[1][0] = 1; // 사자를 배치하지 않는 경우
  dp[1][1] = 1; // 사자를 왼쪽에 배치하는 경우
  dp[1][2] = 1; // 사자를 오른쪽에 배치하는 경우

  for (let i = 2; i <= N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD; // 사자를 배치하지 않는 경우
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD; // 사자를 왼쪽에 배치하는 경우
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD; // 사자를 오른쪽에 배치하는 경우
  }

  console.log(dp[N].reduce((acc, cur) => acc + cur, 0) % MOD); // 마지막 집을 칠하는 최소 비용을 출력합니다.
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
