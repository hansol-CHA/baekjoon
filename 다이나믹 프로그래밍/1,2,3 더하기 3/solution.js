/**
 * 백준 문제 1,2,3 더하기 3
 * https://www.acmicpc.net/problem/15988
 * 문제 설명:
 * 1, 2, 3 더하기 문제는 주어진 수를 1, 2, 3의 합으로 표현하는 방법의 수를 구하는 문제입니다.
 * 이 문제는 동적 프로그래밍을 사용하여 해결할 수 있습니다.
 * 각 수를 만들기 위한 방법의 수를 이전에 계산된 값들을 이용하여 구할 수 있습니다.
 * 입력:
 * 첫 줄에 테스트 케이스의 수 T가 주어집니다.
 * 다음 T줄에는 각 테스트 케이스에 대해 정수 N이 주어집
 * 니다. (1 ≤ N ≤ 1,000,000)
 * 출력:
 * 각 테스트 케이스에 대해 N을 1, 2, 3의 합으로 표현하는 방법의 수를 출력합니다.
 * 각 결과는 1,000,000,009로 나눈 나머지를 출력합니다.
 *
 */

function solution(input) {
  const [_, ...testCases] = input.map(Number);
  const mod = 1000000009;

  const maxNum = Math.max(...testCases);
  const dp = Array(maxNum + 1).fill(0);

  for (let i = 1; i <= maxNum; i++) {
    if (i === 1) {
      dp[i] = 1;
    } else if (i === 2) {
      dp[i] = 2;
    } else if (i === 3) {
      dp[i] = 4;
    } else {
      dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
    }
  }

  console.log(testCases.map((n) => dp[n]).join("\n"));
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
