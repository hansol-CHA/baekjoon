/**
 * 접미사 배열
 * https://www.acmicpc.net/problem/11656
 * 문자열의 접미사를 사전순으로 정렬하여 출력하는 문제
 */

function solution(input) {
  const string = input[0];
  const suffixes = [];

  for (let i = 0; i < string.length; i++) {
    suffixes.push(string.slice(i));
  }

  console.log(suffixes.sort().join("\n"));
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
