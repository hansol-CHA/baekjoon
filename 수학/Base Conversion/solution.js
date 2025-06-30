/**
 * 백준 문제 Base Conversion
 * https://www.acmicpc.net/problem/11576
 * * 문제 설명:
 * 두 개의 정수 A, B와 A진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.
 */

function solution(input) {
  const [[seventeen, eight], [count], numbers] = input.map((line) =>
    line.trim().split(" ").map(Number)
  );

  let sum = 0;

  for (let i = 0; i < count; i++) {
    const number = numbers[i];

    sum += number * seventeen ** (count - i - 1);
  }

  let result = [];

  while (sum !== 0) {
    const digit = sum % eight;
    sum = Math.floor(sum / eight);
    result.push(digit);
  }

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
