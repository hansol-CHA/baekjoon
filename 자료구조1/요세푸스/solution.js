/**
 * 문제 요세푸스
 * 문제 링크: https://www.acmicpc.net/problem/1158
 * 요세푸스 문제는 N명의 사람이 원을 이루며 앉아 있고, K번째 사람을 제거하는 과정을 반복하여 마지막에 남는 사람을 찾는 문제입니다.

 */

function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  const people = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];

  let index = 0;

  while (people.length > 0) {
    index = (index + k - 1) % people.length; // k번째 사람 (1-based -> 0-based index 조정)
    result.push(...people.splice(index, 1)); // 제거 및 결과 추가
  }

  console.log("<" + result.join(", ") + ">");
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
