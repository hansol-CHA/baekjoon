/**
 * 백준 문제 -2진수
 * https://www.acmicpc.net/problem/2089
 *
 * 문제 설명:
 * -2진법은 부호 없는 2진수로 표현이 불가능한 음수를 표현하기 위해 사용됩니다.
 * 이 문제에서는 주어진 정수를 -2진수로 변환하는 작업을 수행합니다.
 *  * 입력은 첫 줄에 정수 N이 주어집니다.
 * * 출력은 해당 수의 -2진수 표현을 출력합니다.
 *
 */

function solution(input) {
  let target = Number(input[0]);
  let result = "";

  while (target !== 0) {
    const quotient = Math.floor(target / -2);
    let remainder = target - quotient * -2;
    target = quotient;

    if (remainder < 0) {
      remainder += 2;
      target += 1;
    }

    result = remainder + result;
  }

  console.log(result);
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
