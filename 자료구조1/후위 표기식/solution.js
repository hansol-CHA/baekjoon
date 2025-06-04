/**
 * 문제 후위 표기식
 * https://www.acmicpc.net/problem/1918
 * 후위 표기식은 연산자의 우선순위와 괄호를 고려하여 수식을 변환하는 문제입니다.
 */

function solution(input) {
  const expression = input[0];
  const stack = [];
  let result = "";

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop();
    } else if (/[A-Z]/.test(char)) {
      result += char;
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] !== "(" &&
        precedence[char] <= precedence[stack[stack.length - 1]]
      ) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  while (stack.length) {
    result += stack.pop();
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
