/**
 * 백준 문제 진법 변환
 * https://www.acmicpc.net/problem/2745
 *
 * 문제 설명:
 * B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
 * * 입력:
 * 첫째 줄에 B진법 수 N이 주어진다. N은 알파벳 대문자와 숫자로만 이루어져 있으며, 길이는 1,000을 넘지 않는다.
 * B는 2보다 크거나 같고, 36보다 작거나 같은 자연수이다.
 * * 출력:
 * N을 10진법으로 바꾼 결과를 출력한다.
 *
 * 예시:
 * 입력: 1A 16
 * 출력: 26
 *
 * 입력: ZZZ 36
 * 출력: 46655
 */

function solution(input) {
  const [n, b] = input[0].split(" ");

  console.log(parseInt(n, b));
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
