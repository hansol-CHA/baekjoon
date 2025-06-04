/**
 * 문제 ROT13
 * 링크 https://www.acmicpc.net/problem/11655
 * 알파벳 대소문자를 13글자씩 밀어서 출력하는 문제
 */

function solution(input) {
  const sentence = input[0];
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    const charCode = char.charCodeAt(0);
    const startLower = "a".charCodeAt(0); // 97
    const startUpper = "A".charCodeAt(0); // 65

    if (char >= "a" && char <= "z") {
      const newCharCode = (charCode - startLower + 13) % 26;

      result += String.fromCharCode(newCharCode + startLower);
    } else if (char >= "A" && char <= "Z") {
      const newCharCode = (charCode - startUpper + 13) % 26;

      result += String.fromCharCode(newCharCode + startUpper);
    } else {
      result += char; // 공백이나 특수문자는 그대로 추가
    }
  }

  console.log(result);
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
