/**
 * 문제 알파벳 찾기
 * 링크 https://www.acmicpc.net/problem/10809
 * 주어진 문자열에서 각 알파벳이 처음 등장하는 위치를 찾는 문제입니다.
 */

// 알파벳이 등장하는 위치를 인덱스로 저장
// 등작하지 않으면 -1을 저장

function solution(input) {
  const string = input[0];
  const alphabetCount = Array(26).fill(-1);

  for (let i = 0; i < string.length; i++) {
    const index = string[i].charCodeAt() - 97;

    if (alphabetCount[index] !== -1) continue;

    alphabetCount[index] = i;
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
