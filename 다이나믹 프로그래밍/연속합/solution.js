/**
 * 백준 문제 연속합
 * https://www.acmicpc.net/problem/1912
 * 이 문제는 연속된 부분 수열의 합 중에서 가장 큰 값을 찾는
 * 문제로, 동적 프로그래밍을 이용하여 해결할 수 있습니다.
 * 주어진 수열에서 연속된 부분 수열의 합을 계산하고,
 * 그 중에서 최대값을 찾는 방식으로 접근합니다. 

 */

function solution(input) {
  const nums = input[1].split(" ").map(Number);
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
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
