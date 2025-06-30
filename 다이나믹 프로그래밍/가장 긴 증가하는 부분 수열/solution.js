/**
 * 백준 문제 가장 긴 증가하는 부분 수열
 * https://www.acmicpc.net/problem/11053
 *
 * 수열 A 가 주어졌을 때, 가장 긴 증가하는 부분 수열의 길이를 구하는 문제입니다.
 * 전체 배열에서 순서를 유지하면서 증가하는 가장 긴 부분 수열을 찾는 문제입니다
 */

function solution(input) {
  const [n, ...arr] = input;
  const length = parseInt(n, 10);
  const nums = arr[0].split(" ").map(Number);
  const dp = Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    const target = nums[i];

    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < target) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
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
