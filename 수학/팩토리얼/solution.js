/**
 * 백준 문제 팩토리얼
 * https://www.acmicpc.net/problem/10872
 *
 * * 문제 링크: https://www.acmicpc.net/problem/10872
 * * 팩토리얼을 구하는 문제입니다.
 * * 입력으로 주어진 정수 N에 대해 N!을 출력합니다.
 * * 입력: 5
 * * 출력: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
 *
 */

function solution(input) {
  const num = input[0];
  let factorial = 1;

  if (num === 0) {
    return console.log(1);
  }

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  console.log(factorial);
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
