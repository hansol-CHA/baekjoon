/**
 * 백준 문제 테트로미노
 * https://www.acmicpc.net/problem/14500
 * 문제설명:
 * 테트로미노는 4개의 정사각형 블록으로 이루어진 도형이다.
 * 테트로미노는 회전할 수 있고, 대칭할 수 있다.
 * 테트로미노는 회전할 수 있고, 대칭할 수 있다.
 * */

const cases1 = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
];

const cases2 = [
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
  ],
];

const cases3 = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [2, 0],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 1],
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [1, 0],
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
];

const cases4 = [
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [1, 0],
    [2, 0],
  ],
  [
    [1, 0],
    [1, 1],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
];

const cases5 = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
];

// const cases = [...cases2];
const cases = [...cases1, ...cases2, ...cases3, ...cases4, ...cases5];

function solution(input) {
  const [length, ...boardInput] = input;
  const [n, m] = length.split(" ").map(Number);

  const board = [];

  boardInput.forEach((row) => {
    board.push(row.split(" ").map(Number));
  });

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sum = 0;

      for (let combination of cases) {
        console.log(combination);

        for (let [x, y] of combination) {
          if (i + x >= n || j + y >= m) break;

          sum += board[i + x][j + y];

          console.log({ i, j, sum, board: board[i + x][j + y] });
        }

        max = Math.max(max, sum);
        sum = 0;
      }
    }
  }

  console.log(max);
}

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
