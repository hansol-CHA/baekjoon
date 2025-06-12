/**
 * 백준 문제 최소 공약수와 최대 공배수
 * https://www.acmicpc.net/problem/2609
 * * 최소 공약수(GCD)와 최대 공배수(LCM)를 구하는 문제입니다.
 * * 주어진 두 수 A와 B에 대해 다음을 출력합니다:
 * *   1. A와 B의 최대 공약수(GCD)
 * *   2. A와 B의 최소 공배수(LCM)
 * * * 최소 공약수(GCD)는 두 수의 공통된 약수 중 가장 큰 수를 의미하며,
 * * * 최대 공배수(LCM)는 두 수의 공통된 배수 중 가장 작은 수를 의미합니다.
 *
 */

function solution(input) {
  const [A, B] = input[0].split(" ").map(Number);
  const output = [];

  // 최대 공약수(GCD) 계산

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  // 최소 공배수(LCM) 계산
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  output.push(gcd(A, B)); // 최대 공약수
  output.push(lcm(A, B)); // 최소 공배수

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
