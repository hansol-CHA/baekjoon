/**
 * 문제 후위 표기식2
 * https://www.acmicpc.net/problem/1935
 * 후위 표기식 계산 문제로, 주어진 후위 표기식을 계산하여 결과를 출력하는 문제입니다.
 */

function solution(input) {
  const [n, expression, ...value] = input;
  const stack = [];
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (/[A-Z]/.test(char)) {
      stack.push(Number(value[char.charCodeAt(0) - 65]));
    } else if (char === "*" || char === "/") {
      const second = stack.pop();
      const first = stack.pop();

      if (i === expression.length - 1) {
        result = char === "*" ? first * second : first / second;
      } else {
        stack.push(char === "*" ? first * second : first / second);
      }
    } else if (char === "+" || char === "-") {
      const second = stack.pop();
      const first = stack.pop();

      if (i === expression.length - 1) {
        // 마지막 연산자 처리
        result = char === "+" ? first + second : first - second;
      } else {
        stack.push(char === "+" ? first + second : first - second);
      }
    }
  }

  console.log(result.toFixed(2));
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
