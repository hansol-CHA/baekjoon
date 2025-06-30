/**
 * 백준 문제 오르막수
 * https://www.acmicpc.net/problem/11057
 * 문제 설명:
 * 오르막수는 수가 오름차순으로 정렬되어 있는 수를
 * 의미한다. 예를 들어, 1234, 1111, 1357은 오르막수이고,
 * 321, 5432, 9876은 오르막수가 아니다.
 * N자리 오르막수의 개수를 구하는 프로그램을 작성한다.
 * 수는 0으로 시작할 수 있다.
 * 입력 형식:
 * 첫째 줄에 N이 주어진다. (1 ≤ N ≤ 1000)
 * 출력 형식:
 * N자리 오르막수의 개수를 1,000,000,000으로 나눈 나머지를 출력한다.
 * 예제 입력:
 * 3
 * 예제 출력:
 * 220
 */
function solution(input) {
  const N = parseInt(input[0]);
  const MOD = 10007;

  const dp = Array(10).fill(1); // 1자리 오르막 수는 모두 1개 (0~9)

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`i: ${i}, j: ${j}, dp[j]: ${dp[j]} dp[j - 1]: ${dp[j - 1]}`);
      dp[j] = (dp[j] + dp[j - 1]) % MOD;
    }
  }

  const result = dp.reduce((acc, cur) => (acc + cur) % MOD, 0);
  console.log(result);
}

// function solution(input) {
//   const N = parseInt(input[0]);
//   const MOD = 10007;
//   const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

//   for (let i = 0; i < 10; i++) {
//     dp[1][i] = 1; // 1자리 오르막수는 각 숫자 하나씩
//   }

//   for (let i = 2; i <= N; i++) {
//     for (let j = 0; j < 10; j++) {
//       for (let k = j; k < 10; k++) {
//         dp[i][j] += dp[i - 1][k]; // 이전 자리에서 j보다 크거나 같은 숫자들로 오르막수를 구성
//         dp[i][j] %= MOD; // 모듈러 연산
//       }
//     }
//   }

//   console.log(dp[N].reduce((acc, cur) => (acc + cur) % MOD, 0)); // N자리 오르막수의 개수를 출력합니다.
// }

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
