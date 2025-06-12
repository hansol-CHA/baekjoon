/**
 * 백준 문제 소수 찾기
 * 문제 번호: 1978
 * 문제 링크: https://www.acmicpc.net/problem/1978
 * 문제 설명:
 * 주어진 자연수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
 * 입력:
 * 첫째 줄에 자연수 N이 주어진다. (1 ≤ N ≤ 100)
 * 둘째 줄에는 N개의 자연수가 주어진다. 이 자연수는 1,000,000보다 작거나 같은 자연수이다.
 * 출력:
 * 주어진 자연수 중 소수의 개수를 출력한다.
 */

function isPrime(num) {
  // 1은 소수가 아님
  if (num <= 1) return false;

  // 2와 3은 소수
  if (num <= 3) return true;

  // 2와 3의 배수 빠르게 처리
  if (num % 2 === 0 || num % 3 === 0) return false;

  // 5부터 제곱근까지 6k ± 1 형태의 수로만 나눗셈 시도
  // (모든 소수는 6k ± 1 형태로 표현 가능, 단 2와 3 제외)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function solution(input) {
  const [_, numbers] = input;
  const nums = numbers.split(" ").map(Number);

  // 각 숫자에 대해 소수 판별
  let primeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      primeCount++;
    }
  }

  console.log(primeCount);
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
