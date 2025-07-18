/**
 * 백준 문제 수 이어 쓰기 1
 * https://www.acmicpc.net/problem/1748
 * 1부터 N까지 숫자를 이어쓰면 나오는 자리수를 구하는 문제
 */

function solution(input) {
  const N = Number(input[0]);

  const digit = N.toString();

  let count = 0;

  for (let j = 1; j < digit.length; j++) {
    const 개수 = 9 * 10 ** (j - 1);

    count += 개수 * j;
  }

  count += (N - 10 ** (digit.length - 1) + 1) * digit.length;

  console.log(count);
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
