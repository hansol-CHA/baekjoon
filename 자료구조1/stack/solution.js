/**
 * 백준 10828번: 스택
 * https://www.acmicpc.net/problem/10828
 */

function solution(input) {
  const stack = [];
  const output = [];

  for (let i = 1; i < input.length; i++) {
    const target = input[i].split(" ");

    switch (target[0]) {
      case "push":
        stack.push(Number(target[1]));
        break;
      case "pop":
        output.push(stack.length === 0 ? -1 : stack.pop());
        break;
      case "size":
        output.push(stack.length);
        break;
      case "top":
        output.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
      case "empty":
        output.push(stack.length === 0 ? 1 : 0);
        break;
    }
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

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// function solution(input) {
//   const stack = [];
//   const output = [];

//   for (let i = 1; i < input.length; i++) {
//     const [cmd, val] = input[i].split(' ');
//     switch (cmd) {
//       case 'push':
//         stack.push(Number(val));
//         break;
//       case 'pop':
//         output.push(stack.length ? stack.pop() : -1);
//         break;
//       case 'size':
//         output.push(stack.length);
//         break;
//       case 'empty':
//         output.push(stack.length === 0 ? 1 : 0);
//         break;
//       case 'top':
//         output.push(stack.length ? stack[stack.length - 1] : -1);
//         break;
//     }
//   }
//   console.log(output.join('\n'));
// }

// solution(input);
