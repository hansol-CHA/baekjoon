/**
 * 백준 문제 최소공배수
 *
 * 문제 링크: https://www.acmicpc.net/problem/1934
 */

const gcd = (a, b) => {
  while (b % a !== 0) {
    const temp = a;
    a = b % a;
    b = temp;
  }

  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function solution(input) {
  const [_, ...numbers] = input;
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    const [A, B] = numbers[i].split(" ").map(Number);

    output.push(lcm(A, B));
  }

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
