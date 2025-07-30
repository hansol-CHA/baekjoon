/**
 * 백준 문제 부등호
 * 문제 링크 : https://www.acmicpc.net/problem/2529

 */

const solution = (input) => {
  const k = Number(input[0]);
  const signs = input[1].split(" ");

  const visited = new Array(10).fill(false);
  const result = [];
  const arr = [];

  const check = (a, b, sign) => {
    return sign === "<" ? a < b : a > b;
  };

  const dfs = (idk) => {
    if (idk === k + 1) {
      result.push(arr.join(""));
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      arr[idk] = i;

      if (idk > 0 && !check(arr[idk - 1], arr[idk], signs[idk - 1])) {
        visited[i] = false;
        continue;
      }

      dfs(idk + 1);
      visited[i] = false;
    }
  };

  dfs(0);

  console.log([result[result.length - 1], result[0]].join("\n"));
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
