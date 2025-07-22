/**
 * 백준 문제 수 N과 M (1)
 * https://www.acmicpc.net/problem/15649
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 모두 구하는 문제
 * 수열은 사전 순으로 증가하는 순서로 출력해야 함
 * 중복되는 수열을 여러 번 출력하면 안됨
 * 수열은 공백으로 구분해서 출력해야 함
 * 수열은 한 줄에 하나씩 출력해야 함
 */

const recursion = (arr, depth, N, M, visited) => {
  if (depth === M) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) {
      continue;
    }

    arr[depth] = i;
    visited[i] = true;
    recursion(arr, depth + 1, N, M, visited);
    visited[i] = false;
  }
};

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const visited = new Array(N + 1).fill(false);
  const array = Array(M);

  recursion(array, 0, N, M, visited);
}
// function solution(input) {
//   const [N, M] = input[0].split(" ").map(Number);

//   for (let i = 1; i <= N; i++) {
//     recursion([i], 1, N, M);
//   }
// }

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
