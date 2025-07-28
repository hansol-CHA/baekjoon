/**
 * 백준 문제 모든 순열
 * 문제 링크: https://www.acmicpc.net/problem/10974
 * 문제 설명: 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.
 *
 * 입력 3
 * 출력
 * 1 2 3
 * 1 3 2
 * 2 1 3
 * 2 3 1
 * 3 1 2
 * 3 2 1
 */

const solution = (input) => {
  const N = Number(input[0]);

  const result = [];
  const arr = [];
  const visited = Array(N + 1).fill(false);

  const dfs = (count) => {
    if (count === N) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      arr[count] = i;
      dfs(count + 1);
      visited[i] = false;
    }
  };

  dfs(0);

  console.log(result.join("\n"));
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
