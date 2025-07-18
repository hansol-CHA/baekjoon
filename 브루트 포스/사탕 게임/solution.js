/**
 * 백준 문제 사탕 게임
 * https://www.acmicpc.net/problem/3085
 * 문제 설명:
 * 사탕 게임은 N×N 크기의 격자에서 진행되며, 각 격자에는 사탕이 들어있다.
 * 사탕의 색은 빨간색(R), 파란색(B), 초록색(G), 노란색(Y) 중 하나이다.
 * 먹을 수 있는 사탕의 최대 개수를 구하는 문제이다.
 * 먹을 수 있는 사탕의 최대 개수는 연속된 사탕의 최대 개수를 구하는 문제이다.
 * 연속된 사탕의 최대 개수는 상하좌우로 인접한 사탕의 최대 개수를 구하는 문제이다.
 * 상하좌우로 인접한 사탕의 최대 개수는 상하좌우로 인접한 사탕의 최대 개수를 구하는 문제이다.
 * 입력 형식:
 * 첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)
 * 둘째 줄부터 N개의 줄에 보드에 채워져 있는 사탕의 색상이 주어진다.
 * 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.
 * 출력 형식:
 * 첫째 줄에 먹을 수 있는 사탕의 최대 개수를 출력한다.
 * 예제 입력:
 * 5
 * YCPZY
 * CYZZP
 * CCPPP
 * PPYZZ
 * YCYZC
 * 예제 출력:
 * 1
 */

function solution(input) {
  const [N, ...candy] = input;
  const length = Number(N);
  const board = candy.map((c) => c.split(""));
  let max = 0;

  // 현재 보드 기준으로 가장 많은 캔디의 수 찾기
  const checkMaxCandy = (board) => {
    let max = 1;
    for (let i = 0; i < length; i++) {
      let count = 1;

      // 열을 순회
      for (let j = 1; j < length; j++) {
        count = board[i][j] === board[i][j - 1] ? count + 1 : 1;
        max = Math.max(max, count);
      }

      count = 1;
      // 행을 순회
      for (let j = 1; j < length; j++) {
        count = board[j][i] === board[j - 1][i] ? count + 1 : 1;
        max = Math.max(max, count);
      }
    }
    return max;
  };

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      // 가로 swap
      let newBoard = board.map((row) => [...row]);
      [newBoard[i][j], newBoard[i][j + 1]] = [
        newBoard[i][j + 1],
        newBoard[i][j],
      ];
      max = Math.max(max, checkMaxCandy(newBoard));

      // 세로 swap
      newBoard = board.map((row) => [...row]);
      [newBoard[j][i], newBoard[j + 1][i]] = [
        newBoard[j + 1][i],
        newBoard[j][i],
      ];
      max = Math.max(max, checkMaxCandy(newBoard));
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
