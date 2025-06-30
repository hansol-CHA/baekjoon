/**
 * 백준 문제 쉬운 계단 수
 * https://www.acmicpc.net/problem/10844
 * 문제 설명:
 * 1. N자리의 계단 수를 구하는 문제입니다.
 * 2. 계단 수는 인접한 두 자리의 차가 1인 수를 말합니다.
 * 3. N이 주어졌을 때, N자리의 계단 수의 개수를 구하는 문제입니다.
 * 4. 0으로 시작하는 계단 수는 없으며, 1자리 수는 모두 계단 수입니다.
 * 5. 결과는 1,000,000,000으로 나눈 나머지를 출력합니다.
 *  6. 동적 프로그래밍을 사용하여 문제를 해결합니다.
 *
 * 입력:
 * - 첫째 줄에 N이 주어집니다. (1 ≤ N ≤ 100)
 * 출력:
 * - N자리의 계단 수의 개수를 1,000,000,000으로 나눈 나머지를 출력합니다.
 *
 * 예제 입력:
 * 1
 *
 * 예제 출력:
 * 9
 *
 * 이해함 N의 3자리 중에 끝자리가 4인 케이스는 N의 2자리 중에 끝자리가 3인 케이스와 5인 케이스가 있습니다.
 * 따라서 dp[i][j]는 i자리 수의 끝자리가 j인 계단 수의 개수를 의미합니다.
 * dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
 */

function solution(input) {
  const N = parseInt(input[0]);
  const MOD = 1000000000;

  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(-1)); // -1로 초기화 (미방문 체크)

  const recursion = (n, digit) => {
    if (n === 1) return digit === 0 ? 0 : 1;

    if (dp[n][digit] !== -1) return dp[n][digit];

    let sum = 0;

    if (digit === 0) {
      sum += recursion(n - 1, 1);
    } else if (digit === 9) {
      sum += recursion(n - 1, 8);
    } else {
      sum += recursion(n - 1, digit - 1) + recursion(n - 1, digit + 1);
    }

    dp[n][digit] = sum % MOD;
    return dp[n][digit]; // ✅ MOD 연산된 값을 반환
  };

  let count = 0;

  for (let i = 0; i <= 9; i++) {
    count += recursion(N, i);
  }

  console.log(count % MOD);
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
