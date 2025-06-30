/**
 * 골드바흐 파티션
 * https://www.acmicpc.net/problem/17103
 *
 * 문제: 주어진 정수 n에 대해, n을 두 개의 소수의 합으로 표현하는 방법의 수를 구하는 함수.
 */

function solution(input) {
  const [_, ...numbers] = input.map(Number);
  const maxNumber = Math.max(...numbers);

  const isPrime = Array(maxNumber + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

  for (let i = 2; i * i <= maxNumber; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= maxNumber; j += i) {
        if (!isPrime[j]) continue; // 이미 소수가 아닌 것으로 표시된 경우 건너뛰기
        isPrime[j] = false;
      }
    }
  }

  const output = [];

  for (const n of numbers) {
    let count = 0;

    for (let i = 2; i <= n / 2; i++) {
      if (!isPrime[i]) continue; // i가 소수가 아닌 경우 건너뛰기

      const complement = n - i;

      if (isPrime[complement]) {
        count++;
      }
    }

    output.push(count);
  }

  console.log(output.join("\n"));
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
