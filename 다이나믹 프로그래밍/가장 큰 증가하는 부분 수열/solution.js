/**
 * 백준 문제 가장 큰 증가하는 부분 수열
 * https://www.acmicpc.net/problem/11055
 * 이 문제는 주어진 수열에서 가장 큰 증가하는 부분 수열을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수열에서 가장 큰 증가하는 부분 수열을 찾는 방식으로 접근합니다.
 * * 예를 들어, 주어진 수열이 다음과 같다면,
 * * 1 100 2 50 60 3 5 6 7 8
 * * 이 경우, 가장 큰 증가하는 부분 수열은 1 100 60 7 8이 됩니다.
 * * 따라서, 이 문제는 주어진 수열에서 가장 큰 증가하는 부분 수열을 찾는 문제로,
 * * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 */

function solution(input) {
  const [n, arr] = input;
  const length = Number(n);
  const nums = arr.split(" ").map(Number);
  const dp = [...nums];

  for (let i = 0; i < length; i++) {
    for (let k = i - 1; k >= 0; k--) {
      if (nums[k] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[k] + nums[i]);
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
