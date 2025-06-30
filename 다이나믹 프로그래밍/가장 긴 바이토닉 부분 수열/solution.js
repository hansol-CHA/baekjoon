/**
 * 백준 문제 가장 긴 바이토닉 부분 수열
 * https://www.acmicpc.net/problem/11054
 * 이 문제는 주어진 수열에서 가장 긴 바이토닉 부분 수열을 찾는 문제로,
 * 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수열에서 가장 긴 바이토닉 부분 수열을 찾는 방식으로 접근합니다.
 * * 예를 들어, 주어진 수열이 다음과 같다면,
 * * 1 5 2 1 4 3 4 5 2 1
 * * 이 경우, 가장 긴 바이토닉 부분 수열은 1 5 2 1 4 3 4 5 2 1이 됩니다.
 * * 바이토닉 부분 수열은 증가하다가 감소하는 수열을 의미합니다.
 */

function solution(input) {
  const [N, arr] = input;
  const length = Number(N);
  const nums = arr.split(" ").map(Number);

  if (length === 1) {
    console.log(1);
    return;
  }

  const rightDp = Array(length).fill(1);
  const leftDp = Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        rightDp[i] = Math.max(rightDp[i], rightDp[j] + 1);
      }
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    for (let k = i + 1; k < length; k++) {
      if (nums[k] < nums[i]) {
        leftDp[i] = Math.max(leftDp[i], leftDp[k] + 1);
      }
    }
  }

  const sum = rightDp.map((v, idx) => v + leftDp[idx] - 1);

  console.log(Math.max(...sum));
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
