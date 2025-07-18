/**
 * 백준 문제 날짜 계산
 * https://www.acmicpc.net/problem/1476
 * 문제 설명:
 *
 */

function solution(input) {
  const [earth, sun, moon] = input[0].split(" ").map(Number);

  let targetYear = 1;

  while (true) {
    if (
      (targetYear - earth) % 15 === 0 &&
      (targetYear - sun) % 28 === 0 &&
      (targetYear - moon) % 19 === 0
    ) {
      break;
    }

    targetYear += 1;
  }

  console.log(targetYear);
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
