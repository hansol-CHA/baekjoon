/**
 * 백준 문제 합분해
 * https://www.acmicpc.net/problem/2225
 * 이 문제는 주어진 수를 두 개의 수의 합으로 표현하는 방법을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수 n에 대해, 1부터 n까지의 수들을
 * 이용하여 n을 만들 수 있는 방법의 개수를 찾는 방식으로 접근합니다.
 * 예를 들어, n이 5라면, 5 = 1 +4, 5 = 2 + 3, 5 = 3 + 2,
 * 5 = 4 + 1, 5 = 5 + 0 등으로 표현할 수 있으며,
 * 이 경우 5를 만들 수 있는 방법의 개수는 5개입니다.
 * 0부터 N까지의 정수 K개를 더해서 그 합이 N이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 * 덧셈의 순서가 바뀐 경우는 다른 경우로 센다(1+2와 2+1은 서로 다른 경우).
 * 또한 한 개의 수를 여러 번 쓸 수도 있다.
 */

function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  const mod = 1000000000; // 결과를 1,000,000,000으로 나눈 나머지

  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
  for (let i = 0; i <= n; i++) dp[i][1] = 1; // n을 1개 수로 표현
  for (let j = 0; j <= k; j++) dp[0][j] = 1; // 0을 k개로 표현

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  console.log(dp[n][k - 1] % mod); // 결과를 1,000,000,000으로 나눈 나머지 출력
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
