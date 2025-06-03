/**
 * 백준 단어 뒤집기
 * https://www.acmicpc.net/problem/9093
 
 */

function solution(input) {
  const output = [];

  for (let i = 1; i < input.length; i++) {
    const words = input[i].split(" ");

    const reversedWords = words
      .map((word) => word.split("").reverse().join(""))
      .join(" ");

    output.push(reversedWords);
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
