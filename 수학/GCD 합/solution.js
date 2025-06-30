/**
 * 백준 문제 GCD 합
 * https://www.acmicpc.net/problem/9613
 * 문제 설명:
 * 두 수의 GCD를 구하는 함수와, 주어진 수들의 GCD 합을 구하는 문제입니다.
 * 입력으로 주어진 수들의 GCD를 모두 구하고,
 * 그 합을 출력하는 프로그램을 작성해야 합니다.
 */

// GCD를 구하는 함수

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function solution(input) {
  const output = [];

  for (let i = 1; i < input.length; i++) {
    const [, ...numbers] = input[i].split(" ").map(Number);
    let sum = 0;

    for (let j = 0; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        sum += gcd(numbers[j], numbers[k]);
      }
    }

    output.push(sum);
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
