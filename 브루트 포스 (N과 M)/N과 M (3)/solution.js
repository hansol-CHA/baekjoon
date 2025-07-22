/**
 * 백준 문제 수 N과 M (3)
 * https://www.acmicpc.net/problem/15651
 * 1부터 N까지 자연수 중에서 M개를 고른 수열을 모두 구하는 문제
 * 같은 수를 여러 번 골라도 됨
 * 수열은 공백으로 구분해서 출력해야 함
 * 수열은 한 줄에 하나씩 출력해야 함
 */

const result = [];

const recursion = (arr, depth, N, M) => {
  if (depth === M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr[depth] = i;
    recursion(arr, depth + 1, N, M);
  }
};

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);

  const array = Array(M);

  recursion(array, 0, N, M);

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
