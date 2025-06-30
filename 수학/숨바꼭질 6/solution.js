/**
 * 백준 문제 숨바꼭질 6
 * https://www.acmicpc.net/problem/17087
 * * 문제 설명:
 *
 * 수빈이가 위치한 X에서 1초마다 D만큼 떨어진 위치로 이동할 수 있습니다.
 * 모든 동생들이 떨어진 위치에 도달하기 위한 D 값을 구해야함
 * 1초: X + D, 2초: X + 2D, ..., N초: X + ND
 */

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(input) {
  const [[N, S], positions] = input.map((line) => line.split(" ").map(Number));

  const distances = positions.map((position) => Math.abs(position - S));

  if (S === 1) {
    console.log(distances.join(" "));
    return;
  }

  let commonGCD = distances[0];
  for (let i = 1; i < distances.length; i++) {
    commonGCD = gcd(commonGCD, distances[i]);
  }

  console.log(commonGCD);
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
