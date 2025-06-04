/**
 * 문제 알파벳 개수
 * https://www.acmicpc.net/problem/10808
 * 주어진 문자열에서 알파벳의 개수를 세는 문제로, 각 알파벳이 문자열에 몇 번 등장하는지를 출력하는 문제입니다.
 */

function solution(input) {
  const string = input[0];
  const alphabetCount = Array(26).fill(0);

  for (let char of string) {
    const index = char.charCodeAt() - 97;

    alphabetCount[index]++;
  }

  console.log(alphabetCount.join(" "));
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
