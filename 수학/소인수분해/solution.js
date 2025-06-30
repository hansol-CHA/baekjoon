/**
 * 백준 문제 소인수분해
 * https://www.acmicpc.net/problem/11653
 *
 * 문제 설명:
 * 주어진 정수를 소인수분해하여 그 결과를 출력하는 프로그램을 작성하세요.
 * 입력은 정수 N (1 ≤ N ≤ 10,000,000)이며, 출력은 N의 소인수들을 오름차순으로 나열합니다.
 *
 * 예시 입력:
 * 18
 *
 * 예시 출력:
 * 2
 * 3
 * 3
 * 예시 설명:
 * 18은 2와 3의 곱으로 표현되며, 2는 한 번, 3은 두 번 등장합니다.
 * 이 문제는 소인수분해를 통해 주어진 정수를 소수의 곱으로 표현하는 방법을 이해하고 구현하는 데 중점을 둡니다.
 */

// 우선 소수를 구해보자

function solution(input) {
  let N = Number(input[0]);
  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false; // i의 배수는 소수가 아님
      }
    }
  }

  const primes = [];

  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      while (N % i === 0) {
        N /= i; // N을 i로 나누어 소인수분해
        primes.push(i);
      }
    }
  }

  console.log(primes.join("\n"));
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
