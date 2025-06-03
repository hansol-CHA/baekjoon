/**
 * 백준 문제 오큰수
 * https://www.acmicpc.net/problem/17298
 */

function solution(input) {
  const N = +input[0];
  const A = input[1].split(" ").map(Number);
  const result = new Array(N).fill(-1); // 기본은 -1
  const stack = [];

  for (let i = N - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= A[i]) {
      stack.pop();
    }

    result[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(A[i]);
  }

  console.log(result.join(" "));
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
