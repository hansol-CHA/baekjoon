/**
 * 백준 문제 스타트와 링크
 * 문제 링크 : https://www.acmicpc.net/problem/14889
 *
 * 비트마스크를 사용하여 스타트와 링크 문제를 풀이
 * 모든 경우의 수를 확인하여 최소 값을 찾는 문제
 */

// dfs 및 비트마스크 조합 풀이
const solution = (input) => {
  const [n, ...arr] = input;

  const length = Number(n);
  const power = arr.map((line) => line.split(" ").map(Number));

  let min = Infinity;

  const getPower = (bitmask) => {
    let sum = 0;

    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (bitmask & (1 << i) && bitmask & (1 << j)) {
          sum += power[i][j] + power[j][i];
        }
      }
    }

    return sum;
  };

  const dfs = (depth, count, bitmask) => {
    if (count === length / 2) {
      const star = bitmask;
      const link = ~bitmask & ((1 << length) - 1);

      const starPower = getPower(star);
      const linkPower = getPower(link);

      min = Math.min(min, Math.abs(starPower - linkPower));
      return;
    }

    for (let i = depth; i < length; i++) {
      dfs(i + 1, count + 1, bitmask | (1 << i));
    }
  };

  dfs(0, 0, 0);

  console.log(min);
};

// const solution = (input) => {
//   const [n, ...arr] = input;

//   const length = Number(n);
//   const power = arr.map((line) => line.split(" ").map(Number));

//   const getPower = (index) => {
//     let sum = 0;

//     for (let i = 0; i < index.length; i++) {
//       for (let j = i + 1; j < index.length; j++) {
//         sum += power[index[i]][index[j]] + power[index[j]][index[i]];
//       }
//     }

//     return sum;
//   };

//   let min = Infinity;

//   for (let i = 1; i < (1 << length) / 2; i++) {
//     const team = [];
//     for (let j = 0; j < length; j++) {
//       if (i & (1 << j)) team.push(j);
//     }

//     if (team.length === length / 2) {
//       const complement = [];

//       for (let k = 0; k < length; k++) {
//         if (!(i & (1 << k))) complement.push(k);
//       }

//       const startPower = getPower(team);
//       const linkPower = getPower(complement);

//       min = Math.min(min, Math.abs(startPower - linkPower));
//     }
//   }

//   console.log(min);
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
