/**
 * 백준 문제 오등큰수
 * https://www.acmicpc.net/problem/17299
 */

function solution(input) {
  const N = +input[0];
  const arr = input[1].split(" ").map(Number);
  const maxNum = Math.max(...arr);
  const count = new Array(maxNum).fill(0);
  const result = new Array(N).fill(-1);
  const stack = [];

  arr.forEach((num) => {
    count[num - 1] += 1;
  });

  for (let i = N - 1; i >= 0; i--) {
    const target = arr[i];
    const lastStackValue = stack && stack[stack.length - 1];

    while (count[stack[stack.length - 1] - 1] <= count[arr[i] - 1]) {
      stack.pop();
    }

    result[i] = stack[stack.length - 1] || -1;
    stack.push(target);
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
