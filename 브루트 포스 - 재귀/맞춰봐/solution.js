/**
 * 백준 문제 맞춰봐
 * 문제 링크 : https://www.acmicpc.net/problem/1248
 * 수열의 모든 정수는 -10에서 10 사이의 값이어야 합니다(두 값 모두 포함)
 * a i + … + a j > 0이면 S ij ="+"가 되고, a i + … + a j < 0이면 S ij ="−"가 되고, 그렇지 않으면 S ij ="0"
 */

const solution = (input) => {
  const N = Number(input[0]);
  const signs = [];
  let idx = 0;

  for (let i = 0; i < N; i++) {
    signs[i] = [];
    for (let j = i; j < N; j++) {
      signs[i][j] = input[1][idx++];
    }
  }

  const temp = [];
  let found = false;

  const isValid = (arr, signs, idx) => {
    let sum = 0;

    for (let i = idx; i >= 0; i--) {
      sum += arr[i];
      const sign = signs[i][idx];

      if (sign === "+" && sum <= 0) return false;
      if (sign === "-" && sum >= 0) return false;
      if (sign === "0" && sum !== 0) return false;
    }

    return true;
  };

  const dfs = (idx) => {
    if (found) return;
    if (idx === N) {
      console.log(temp.join(" "));
      found = true;
      return;
    }

    for (let i = -10; i <= 10; i++) {
      temp[idx] = i;
      if (isValid(temp, signs, idx)) {
        dfs(idx + 1);
      }
    }
  };

  dfs(0);
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
