/**
 * 단어 길이 재기
 * https://www.acmicpc.net/problem/2743
 * 문자열이 주어지면, 그 문자열의 길이를 구하는 문제
 *  */

function solution(input) {
  const word = input[0];

  console.log(word.length);
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
