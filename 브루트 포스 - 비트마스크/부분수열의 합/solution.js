/**
 * 백준 문제 부분수열의 합
 * 문제 링크 : https://www.acmicpc.net/problem/1182
 *
 * 비트마스크를 사용하여 부분수열의 합을 구하는 문제
 * 주어진 수열에서 부분수열의 합이 S가 되는 경우의 수를 구하는 문제
 */

// 재귀로 풀기
const solution = (input) => {
  const [n, s] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let count = 0;

  const dfs = (index, sum) => {
    if (index === n) {
      if (sum === s) {
        count++;
      }
      return;
    }

    // 해당 인덱스를 선택함
    dfs(index + 1, sum + numbers[index]);

    // 해당 인덱스를 선택하지 않음
    dfs(index + 1, sum);
  };

  dfs(0, 0);

  if (s === 0) {
    count--;
  }

  console.log(count);
};

// const solution = (input) => {
//   const [n, s] = input[0].split(" ").map(Number);
//   const numbers = input[1].split(" ").map(Number);

//   let count = 0;

//   for (let i = 1; i < 1 << n; i++) {
//     let sum = 0;

//     for (let j = 0; j < n; j++) {
//       if (i & (1 << j)) {
//         sum += numbers[j];
//       }
//     }

//     if (sum === s) {
//       count++;
//     }
//   }

//   console.log(count);
// };

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
