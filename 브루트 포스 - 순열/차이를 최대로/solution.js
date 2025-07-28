/**
 * 백준 문제 차이를 최대로
 * 문제 링크: https://www.acmicpc.net/problem/10819
 * 문제 설명: N개의 정수로 이루어진 배열 A가 주어진다.
 * 이때, 배열에 들어있는 정수의 순서를 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.
 * |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
 *
 * 입력 6
 * 20 1 15 8 4 10
 *
 * 출력 62
 */

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  let minValue = Number.MIN_SAFE_INTEGER;
  const temp = Array(N).fill(0);
  const visited = Array(N).fill(false);

  const dfs = (count) => {
    if (count === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(temp[i] - temp[i + 1]);
      }

      minValue = Math.max(sum, minValue);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      temp[count] = arr[i];
      dfs(count + 1);
      visited[i] = false;
    }
  };

  dfs(0);

  console.log(minValue);
};

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
