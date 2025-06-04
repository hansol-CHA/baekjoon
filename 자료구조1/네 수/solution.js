/**
 * 문제 네 수
 * https://www.acmicpc.net/problem/10824
 * A와 B를 붙인 수와 C와 D를 붙인 수의 합
 */

function solution(input) {
  const [A, B, C, D] = input[0].split(" ");

  console.log(Number(A + B) + Number(C + D));
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
