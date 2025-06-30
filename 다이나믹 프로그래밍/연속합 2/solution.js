/**
 * 백준 문제 연속합 2
 * https://www.acmicpc.net/problem/13398
 * 이 문제는 주어진 수열에서 연속된 부분 수열의 합 중에서 가장 큰 값을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수열에서 연속된 부분 수열의 합을 계산하고,
 * 그 중에서 최대값을 찾는 방식으로 접근합니다.
 *
 */

function solution(input) {
  const [N, arr] = input;
  const length = Number(N);
  const nums = arr.split(" ").map(Number);

  const dp = Array(length).fill(0); // 어떤 값도 제거하지 않음
  const dp2 = Array(length).fill(0); // 하나의 값만 제거함
  dp[0] = nums[0];
  dp2[0] = nums[0] > 0 ? 0 : nums[0];

  for (let i = 1; i < length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    dp2[i] = Math.max(dp[i - 1], dp2[i - 1] + nums[i]); // i의 값을 포함하지 않은 값과 이전에 하나를 제거한하고 누적 중인 값을 비교
  }

  console.log(Math.max(...dp, ...dp2));
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
