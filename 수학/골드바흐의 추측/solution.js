/**
 * 백준 문제 골드바흐의 추측
 * 골드바흐의 추측은 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 추측이다.
 * 이 문제에서는 주어진 짝수 N을 두 소수의 합으로 나타내는 방법을 찾는 것이다.
 * * 입력: 짝수 N (4 ≤ N ≤ 10,000)
 * * 출력: N을 두 소수의 합으로 나타내는 방법 중 가장 작은 소수와 큰 소수를 출력한다.
 * * 예시 입력: 8
 * * 예시 출력: 3 5
 * * 문제 링크:https://www.acmicpc.net/problem/6588
 * 8 = 3 + 5
 * 20 = 3 + 17
 * 42 = 5 + 37
 */

function solution(input) {
  const nums = input.slice(0, input.length - 1).map(Number);
  const maxNum = Math.max(...nums);
  // 가장 큰수가 나오고 가장 큰수의 소수를 찾으면 다 나올 것임

  const isPrime = Array(maxNum + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님
  const output = [];

  for (let i = 2; i * i <= maxNum; i++) {
    for (let j = i * i; j <= maxNum; j += i) {
      if (isPrime[j]) {
        isPrime[j] = false; // 소수가 아닌 수를 false로 표시
      }
    }
  }

  let isFound = false;

  for (const n of nums) {
    for (let i = 3; i <= n; i += 2) {
      if (!isPrime[i]) continue; // 소수가 아니면 건너뛰기

      const diff = n - i; // n에서 i를 뺀 값을 구함

      if (isPrime[i] && isPrime[diff]) {
        // diff가 소수이면 출력
        output.push(`${n} = ${i} + ${diff}`);
        isFound = true;
        break; // 첫 번째로 찾은 소수 쌍을 출력하고 루프 종료
      }
    }
  }

  if (!isFound) {
    output.push("Goldbach's conjecture is wrong.");
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
