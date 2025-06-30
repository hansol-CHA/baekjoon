/**
 * 백준 문제 이친수
 * https://www.acmicpc.net/problem/2193
 * 이 문제는 피보나치 수열과 유사한 규칙을 가진 이친수를
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 이친수는 0으로 시작하지 않으며, 1이 연속해서
 * 두 번 나타날 수 없습니다. 따라서 이친수의 길이가 n일 때,
 * 이친수의 개수는 다음과 같은 점화식으로 정의할 수 있습니다
 * P(n) = P(n-1) + P(n-2)
 * 여기서 P(n)은 길이가 n인 이친수의 개수를 나타냅니다
 * P(1) = 1 (0)
 * P(2) = 1 (10)
 * P(3) = 2 (100, 101)
 * P(4) = 3 (1000, 1001, 1010)
 * P(5) = 5 (10000, 10001, 10100, 10101, 11010)
 * P(6) = 8 (100000, 100001, 100010, 100100, 100101, 101000, 101001, 110100)
 * P(7) = 13 (1000000, 1000001, 1000010, 1000100, 1000101, 1001000, 1001001, 1010000, 101000
 */

function solution(input) {
  const n = parseInt(input[0]);
  const dp = Array(n + 1).fill(0);

  if (n === 1) {
    dp[1] = 1; // 길이가 1인 이친수는 0 하나
  }

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n]); // 길이가 n인 이친수의 개수
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
