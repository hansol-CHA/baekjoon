/**
 * 백준 문제 8진수 2진수
 * * https://www.acmicpc.net/problem/1212
 *
 * * 문제 설명:
 * * 8진수로 주어진 수를 2진수로 변환하는 문제입니다.
 * * * 입력은 첫 줄에 8진수로 표현된 수가 주어집니다.
 * * * 출력은 해당 수의 2진수 표현을 출력합니다.
 *
 */

function solution(input) {
  const octalString = input[0].trim(); // 입력된 8진수 문자열

  let binaryString = ""; // 결과를 저장할 문자열

  for (let i = 0; i < octalString.length; i++) {
    const digit = octalString[i]; // 8진수의 각 자리수
    const binary = Number(digit).toString(2);

    if (i === 0) {
      // 첫 번째 자리수는 앞에 0을 붙이지 않음
      binaryString += binary; // 앞의 0 제거
    } else {
      // 나머지 자리수는 항상 3자리로 표현
      binaryString += binary.padStart(3, "0"); // 3자리로 표현된 2진수 문자열 추가
    }
  }

  console.log({ binaryString });
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
