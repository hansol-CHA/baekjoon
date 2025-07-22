/**
 * 백준 문제 수 N과 M (4)
 * https://www.acmicpc.net/problem/15652
 * 1부터 N까지 자연수 중에서 M개를 고른 수열을 모두 구하는 문제
 * 1부터 N까지 자연수 중에서 M개를 고른 수열
 * 같은 수를 여러 번 골라도 된다.
 * 고른 수열은 비내림차순이어야 한다.
 * 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
 */

// const recursion = (arr, depth, N, M, index) => {
//   if (depth === M) {
//     console.log("push", arr.join(" "));
//     result.push(arr.join(" "));
//     return;
//   }

//   for (let i = index; i <= N; i++) {
//     arr[depth] = i;
//     recursion(arr, depth + 1, N, M, arr[depth]);
//   }
// };

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);

  const result = [];
  const arr = [];

  // count를 이용하여 현재까지 뽑은 수의 개수를 관리
  function dfs(count, start) {
    if (count === M) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = start; i <= N; i++) {
      arr[count] = i;
      dfs(count + 1, i);
    }
  }

  dfs(0, 1);

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
