/**
 * 문제 문자열 분석
 * https://www.acmicpc.net/problem/10820
 * 문자열 N개가 주어진다.
 * 소문자, 대문자, 숫자, 공백의 개수를 구함
 */

function solution(input) {
  const count = [0, 0, 0, 0]; // 소문자, 대문자, 숫자, 공백
  const result = [];

  for (let i = 0; i < input.length; i++) {
    // 4줄임
    const word = input[i];

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      const charCode = char.charCodeAt(0);

      if (char === " ") {
        count[3]++;
      } else if (
        charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0)
      ) {
        count[0]++;
      } else if (
        charCode >= "A".charCodeAt(0) &&
        charCode <= "Z".charCodeAt(0)
      ) {
        count[1]++;
      } else if (
        charCode >= "0".charCodeAt(0) &&
        charCode <= "9".charCodeAt(0)
      ) {
        count[2]++;
      }
    }

    result.push(count.join(" "));
    count.fill(0); // 다음 줄을 위해 카운트 초기화
  }

  console.log(result.join("\n"));
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
