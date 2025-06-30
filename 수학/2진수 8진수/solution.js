/**
 * 백준 문제 2진수 8진수
 * https://www.acmicpc.net/problem/1373
 *
 * 문제 설명:
 * 2진수로 주어진 수를 8진수로 변환하는 문제입니다.
 * 입력은 첫 줄에 2진수로 표현된 수가 주어집니다.
 * 출력은 해당 수의 8진수 표현을 출력합니다.
 */

function solution(input) {
  const binaryString = input[0].trim(); // 입력된 2진수 문자열
  // 자리수가 필요

  let octalString = ""; // 결과를 저장할 문자열
  const count = Math.ceil(binaryString.length / 3);
  const fullNumber = binaryString.padStart(count * 3, "0"); // 3의 배수로 맞추기

  for (let i = 0; i < fullNumber.length; i += 3) {
    const slice = fullNumber.slice(i, i + 3); // 3자리씩 잘라서
    octalString += parseInt(slice, 2).toString(8);
  }

  console.log(octalString);
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
