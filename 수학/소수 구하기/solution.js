/**
 * 백준 문제 소수 구하기
 * https://www.acmicpc.net/problem/1929
 * 문제 설명:
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 * 입력:
 * 첫째 줄에 자연수 M과 N이 주어진다. (1 ≤ M ≤ N ≤ 1,000,000)
 * 출력:
 * M이상 N이하의 소수를 한 줄에 하나씩 증가하는 순서로 출력한다.
 * 예제 입력:
 * 3 16
 * 예제 출력:
 * 3
 * 5
 * 7
 * 11
 * 13
 */

function solution(input) {
  const [start, end] = input[0].split(" ").map(Number);

  // 에라토스테네스의 체 알고리즘 최적화
  const isPrime = Array(end + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

  // i*i <= end 까지만 검사하면 됨 (최적화 1)
  for (let i = 2; i * i <= end; i++) {
    // i가 소수라면 i의 배수들을 모두 제거
    if (isPrime[i]) {
      // i*i부터 시작하여 i씩 증가하며 제거 (최적화 2)
      // i*2, i*3, ..., i*(i-1)은 이미 이전 단계에서 제거됨
      for (let j = i * i; j <= end; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // start부터 end까지의 소수만 출력
  const result = [];
  for (let i = Math.max(2, start); i <= end; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
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
