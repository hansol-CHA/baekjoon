/**
 * 백준 문제 가장 긴 증가하는 부분 수열 4
 * https://www.acmicpc.net/problem/14002
 *
 * 수열 A 가 주어졌을 때, 가장 긴 증가하는 부분 수열의 길이를 구하는 문제입니다.
 * 전체 배열에서 순서를 유지하면서 증가하는 가장 긴 부분 수열을 찾는 문제입니다.
 * * 이 문제는 동적 계획법(DP)을 사용하여 해결할 수 있습니다.
 *
 * 첫째 줄에 수열 A의 가장 긴 증가하는 부분 수열의 길이를 출력한다.
 * 둘째 줄에는 가장 긴 증가하는 부분 수열을 출력한다. 그러한 수열이 여러가지인 경우 아무거나 출력한다.
 *
 * */

// 순서는 유지하지만 원소를 건너뛰는 건 가능하다

function solution(input) {
  const [n, ...arr] = input;
  const length = Number(n);
  const nums = arr[0].split(" ").map(Number);
  const dp = Array(length).fill(1);
  const prev = Array(length).fill(-1); // 경로 추적용

  for (let i = 1; i < length; i++) {
    const target = nums[i];

    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < target) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          prev[i] = j; // 어디서 왔는지 저장
        }
      }
    }
  }

  const maxLen = Math.max(...dp);
  let idx = dp.indexOf(maxLen);
  const result = [];

  while (result.length < maxLen) {
    result.push(nums[idx]);
    idx = prev[idx];
  }

  console.log(Math.max(...dp));
  console.log(result.reverse().join(" "));
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
