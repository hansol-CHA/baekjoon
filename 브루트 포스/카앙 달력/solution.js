/**
 * 백준 문제 카앙 달력
 * https://www.acmicpc.net/problem/1022
 * 문제설명:
 * 카앙 달력은 1월 1일부터 12월 31일까지 날짜를 표시하는 달력이다.
 * (1 ≤ M, N ≤ 40,000, 1 ≤ x ≤ M, 1 ≤ y ≤ N)
 * */

// a와 b의 최소 공배수
// a * b / 최대 공약수

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(input) {
  const [count, ...data] = input;
  const length = Number(count);
  const nums = data.map((num) => num.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < length; i++) {
    const [M, N, x, y] = nums[i];

    let j = x;
    let isFound = false;

    const lcmValue = lcm(M, N);

    while (j <= lcmValue) {
      const yRemainder = j % N || N;

      if (yRemainder === y) {
        result.push(j);
        isFound = true;
        break;
      }

      j += M;
    }

    if (!isFound) {
      result.push(-1);
    }
  }

  result.forEach((line) => console.log(line));
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
