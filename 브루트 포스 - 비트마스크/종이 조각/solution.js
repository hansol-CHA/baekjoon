/**
 * 백준 문제 종이 조각
 * 문제 링크 : https://www.acmicpc.net/problem/14391
 *
 * 비트마스크를 사용하여 종이 조각 문제를 풀이
 * 모든 경우의 수를 확인하여 최대 값을 찾는 문제
 */

const solution = (input) => {
  const [nums, ...arr] = input;
  const [n, m] = nums.split(" ").map(Number);
  const paper = arr.map((v) => v.split("").map(Number));

  let max = 0;

  const sum = Array.from({ length: n }, () => Array(m).fill(0));

  // 첫 번째 행과 첫 번째 열을 누적합으로 초기화
  sum[0][0] = paper[0][0];

  for (let i = 1; i < n; i++) sum[i][0] = sum[i - 1][0] + paper[i][0];
  for (let i = 1; i < m; i++) sum[0][i] = sum[0][i - 1] + paper[0][i];

  console.log({ sum });
};

// const solution = (input) => {
//   const [nums, ...arr] = input;
//   const [n, m] = nums.split(" ").map(Number);
//   const paper = arr.map((v) => v.split("").map(Number));

//   let max = 0;

//   for (let i = 0; i < 1 << (n * m); i++) {
//     let sum = [];
//     let temp = "";

//     for (let j = 0; j < n * m; j++) {
//       if (i & (1 << j)) {
//         if (temp) {
//           sum.push(temp);
//           temp = "";
//         }
//         continue;
//       }

//       const row = Math.floor(j / m);
//       const col = j % m;

//       temp += paper[row][col];

//       if (col === m - 1 && temp) {
//         sum.push(temp);
//         temp = "";
//       }
//     }

//     let temp2 = "";

//     for (let j = 0; j < m; j++) {
//       let k = 0;

//       while (k < n) {
//         const index = k * m + j;

//         if (!(i & (1 << index))) {
//           if (temp2) {
//             sum.push(temp2);
//             temp2 = "";
//           }

//           k++;
//           continue;
//         }

//         temp2 += paper[k][j];

//         k++;
//       }

//       if (temp2) {
//         sum.push(temp2);
//         temp2 = "";
//       }
//     }

//     const result = sum.reduce((acc, curr) => acc + Number(curr), 0);

//     max = Math.max(max, result);
//   }

//   console.log(max);
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
