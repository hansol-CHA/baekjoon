/**
 * 괄호
 * https://www.acmicpc.net/problem/9012
 */

// 초기 풀이

function solution(input) {
  const output = [];

  for (let i = 1; i < input.length; i++) {
    let string = [];
    const words = input[i];

    for (let j = 0; j < words.length; j++) {
      const char = words[j];

      if (char === "(") {
        string.push(char);
      } else {
        if (string[string.length - 1] === "(") {
          string.pop();
        } else {
          string.push(char);
        }
      }
    }

    output.push(string.length ? "NO" : "YES");
    string = [];
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

// 개선 풀이 - count을 이용

function solution(input) {
  const output = [];

  for (let i = 1; i < input.length; i++) {
    let count = 0;
    let isVPS = true;
    const words = input[i];

    for (let j = 0; j < words.length; j++) {
      if (words[j] === "(") {
        count++;
      } else {
        count--;
      }

      if (count < 0) {
        isVPS = false;
        break;
      }
    }

    output.push(count === 0 && isVPS ? "YES" : "NO");
  }

  console.log(output.join("\n"));
}
