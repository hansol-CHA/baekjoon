/**
 * 백준 문제 일곱 난쟁이
 * https://www.acmicpc.net/problem/2309
 * 문제 설명:
 * 일곱 난쟁이 문제는 9명의 난쟁이 중에서 7명을 선택하여 합이 100이 되는 조합을 찾는 문제입니다.
 * 9명의 난쟁이 중에서 2명을 제외한 7명의 난쟁이의 키 합이 100이 되는 조합을 찾는 문제입니다.
 * 입력 형식:
 * 첫째 줄에 9개의 수가 주어집니다.
 * 출력 형식:
 * 첫째 줄에 7개의 수를 오름차순으로 출력합니다.
 * 예제 입력:
 * 20
 * 7
 * 23
 * 19
 * 10
 * 15
 * 25
 * 8
 * 13
 * 예제 출력:
 * 7
 * 8
 * 10
 * 13
 * 19
 * 20
 * 23
 */

function solution(input) {
  const sorted = input.map(Number).sort((a, b) => a - b);
  const sum = sorted.reduce((acc, curr) => acc + curr, 0);
  const 나머지 = sum - 100;

  for (let i = 0; i < sorted.length; i++) {
    const target = 나머지 - sorted[i];

    if (sorted.includes(target)) {
      console.log(
        sorted
          .filter((value) => value !== sorted[i] && value !== target)
          .join("\n")
      );
      break;
    }
  }
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
