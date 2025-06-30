/**
 * 백준 문제 카드 구매하기
 * https://www.acmicpc.net/problem/11052
 * 문제 설명: 카드 구매하기 문제는 주어진 카드 묶음의 가격을 이용하여
 * 최대의 수익을 얻는 방법을 찾는 문제입니다.
 * 입력: 첫째 줄에 카드 묶음의 개수 N (1 ≤ N ≤ 1,000)이 주어집니다.
 *       둘째 줄에 카드 묶음의 가격 P (1 ≤ P ≤ 1,000,000)가 주어집니다.
 * 출력: 첫째 줄에 최대 수익을 출력합니다.
 * * 이 문제는 동적 계획법(Dynamic Programming)을 사용하여 해결할 수 있습니다.
 * * 동적 계획법을 사용하여 각 카드 묶음의 가격을 이용해 최대 수익을 계산합니다.
 * * 시간 복잡도는 O(N^2)입니다.
 * * 예시 입력:
 * 4
 * 1 5 6 7
 * 예시 출력:
 * 10
 */

function solution(input) {
  const [num, bundles] = input;
  const N = Number(num);
  const prices = bundles.split(" ").map(Number);

  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) { // 카드팩의 기준
      dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]); // 카드백 J개에 해당하는 가격 + i - j개 카드팩의 최대 가격
    }
  }

  console.log(dp[N]);
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
