/**
 * 스택 수열
 * 문제: https://www.acmicpc.net/problem/1874
 */

// function solution(input) {
//   const stack = [];
//   const output = [];
//   const slicedInput = input.slice(1);
//   const sortedInput = [...slicedInput].sort((a, b) => a - b);
//   let lastPop = 0;

//   console.log({ slicedInput, sortedInput });

//   for (let i = 0; i < slicedInput.length; i++) {
//     const target = slicedInput[i];
//     let count = 0;

//     console.log({ i, same: stack[stack.length - 1] !== target, count, target });

//     while (stack[stack.length - 1] !== target && count < target) {
//       output.push("+");
//       stack.push(sortedInput[i + count]);
//       count++;

//       console.log({ count, target, stack, output });
//     }

//     console.log("if", stack[stack.length - 1], target);

//     if (stack[stack.length - 1] === target) {
//       output.push("-");
//       lastPop = Math.max(lastPop, stack.pop());
//     }

//     console.log({ stack, output, lastPop });
//   }

//   console.log(stack.join("\n"));
// }

function solution(input) {
  const sequence = input.map(Number);

  const stack = [];
  const operations = [];
  let currentNum = 1;

  for (let i = 0; i < sequence.length; i++) {
    const target = sequence[i];

    // target까지 순서대로 push
    while (currentNum <= target) {
      stack.push(currentNum);
      operations.push("+");
      currentNum++;
    }

    if (stack.length > 0 && stack[stack.length - 1] === target) {
      stack.pop();
      operations.push("-");
    } else {
      console.log("NO");
      return;
    }
  }

  console.log(operations.join("\n"));
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
  const [n, ...sequence] = input;

  solution(sequence);

  process.exit();
});
