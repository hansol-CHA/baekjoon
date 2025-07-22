/**
 * 백준 문제 수 N과 M (11)
 * https://www.acmicpc.net/problem/15665
 * 첫째 줄에 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
 * 둘째 줄에 N개의 수가 주어진다. 입력으로 주어지는 수는 10,000보다 작거나 같은 자연수이다.
 * 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다.
 * 중복되는 수열을 여러 번 출력하면 안되며,
 * 각 수열은 공백으로 구분해서 출력해야 한다.
 * 수열은 사전 순으로 증가하는 순서로 출력해야 한다.
 * N개의 자연수 중에서 M개를 고른 수열
 * 같은 수를 여러 번 골라도 된다.
 */

const result = [];

const generateSequence = (arr, nums, depth) => {
  if (arr.length === depth) {
    result.push(arr.join(" "));
    return;
  }

  let prev = -1;

  for (let i = 0; i < nums.length; i++) {
    if (prev === nums[i]) continue;

    arr[depth] = nums[i];
    generateSequence(arr, nums, depth + 1, i);
    prev = nums[i];
  }
};

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);

  const nums = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const array = Array(M).fill(0);

  generateSequence(array, nums, 0);

  console.log(result.join("\n"));
};

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
