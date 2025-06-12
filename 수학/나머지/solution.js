/**
 * 백준 문제 나머지
 * https://www.acmicpc.net/problem/10430
 *
 */

// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

function solution(input) {
  const [A, B, C] = input[0].split(" ").map(Number);
  const output = [];

  output.push((A + B) % C);
  output.push(((A % C) + (B % C)) % C);
  output.push((A * B) % C);
  output.push(((A % C) * (B % C)) % C);

  console.log(output.join("\n"));
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
