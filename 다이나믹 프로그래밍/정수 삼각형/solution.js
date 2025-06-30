/**
 * 백준 문제 정수 삼각형
 * https://www.acmicpc.net/problem/1932
 * 이 문제는 주어진 삼각형의 각 층에서 최대 합을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 삼각형의 각 층에서 최대 합을 찾는 방식으로 접근합니다.
 * * 예를 들어, 주어진 삼각형이 다음과 같다면,
 * * 7
 * * 3 8
 * * 8 1 0
 * * 2 7 4 4
 * * 4 5 2 6 5
 * * 이 경우, 최대 합은 7 + 8 + 8 + 7 = 30이 됩니다.
 * * 따라서, 이 문제는 주어진 삼각형의 각 층에서 최대 합을 찾는 문제로,
 * * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 */

function solution(input) {
  const [n, ...nums] = input;
  const length = Number(n);
  const triangle = nums.map((num) => num.split(" ").map(Number));
  const dp = Array.from({ length: length }, () => Array(length).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + triangle[i][0];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  console.log(Math.max(...dp[length - 1]));
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
