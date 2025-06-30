/**
 * 백준 문제 카드 구매하기 2
 * https://www.acmicpc.net/problem/16194
 * 문제 설명: 카드 구매하기 2 문제는 주어진 카드 묶음의 가격을 이용하여
 * 민규가 카드 N개를 갖기 위해 지불해야 하는 금액의 최솟값을 출력한다.
 * 입력: 첫째 줄에 카드 묶음의 개수 N (1 ≤ N ≤ 1,000)이 주어집니다.
 *      둘째 줄에 카드 묶음의 가격 P (1 ≤ P ≤
 * 1,000,000)가 주어집니다.
 * 출력: 첫째 줄에 민규가 카드 N개를 갖기 위해 지불해야 하는 금액의 최솟값을 출력합니다.
 * * 이 문제는 동적 계획법(Dynamic Programming)을 사용하여 해결할 수 있습니다.
 * * 동적 계획법을 사용하여 각 카드 묶음의 가격을 이용해 최솟값을 계산합니다.
 * * 시간 복잡도는 O(N^2)입니다.
 * * 예시 입력:
 * 4
 * 1 5 6 7
 * 예시 출력:
 */

function solution(input) {
  const [num, bundles] = input;
  const N = Number(num);
  const prices = bundles.split(" ").map(Number);

  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    dp[i] = prices[i - 1];

    for (let j = 1; j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j] + prices[j - 1]);
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
