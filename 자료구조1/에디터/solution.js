/**
 * 문제 에디터
 * https://www.acmicpc.net/problem/1406
 */

function solution(input) {
  const [target, _, ...commands] = input;
  const left = target.split("");
  const right = [];

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i].split(" ");

    switch (command) {
      case "L":
        if (left.length > 0) {
          right.push(left.pop());
        }
        break;
      case "D":
        if (right.length > 0) {
          left.push(right.pop());
        }
        break;
      case "B":
        if (left.length > 0) {
          left.pop();
        }
        break;
      case "P":
        left.push(value);
        break;
    }
  }

  console.log(left.concat(right.reverse()).join(""));
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
