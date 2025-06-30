/**
 * 백준 문제 제곱수의 합
 * https://www.acmicpc.net/problem/1699
 * 이 문제는 주어진 수를 제곱수의 합으로 표현하는 방법을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수 n에 대해, 1부터 n까지의 제곱수들을
 * 이용하여 n을 만들 수 있는 최소 개수를 찾는 방식으로 접근합니다.
 * * 예를 들어, n이 12라면, 12 = 4 + 4 + 4로 표현할 수 있으며,
 * * 이 경우 제곱수 4를 3번 사용하여 12를 만들 수 있습니다.
 * * 따라서, 이 문제는 주어진 수를 제곱수의 합으로 표현하는
 * * 최소 개수를 찾는 문제로, 동적 프로그래밍을 이용하여
 * * 해결할 수 있습니다.    

 */

function solution(input) {
  const n = parseInt(input[0], 10);

  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0; // 0을 만들기 위해 필요한 제곱수의 개수는 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      const square = j * j;
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  console.log(dp[n]);
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
