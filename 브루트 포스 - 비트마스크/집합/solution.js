/**
 * 백준 문제 집합
 * 문제 링크 : https://www.acmicpc.net/problem/11723
 *
 * 비트마스크를 사용하여 집합을 구현하는 문제
 * 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
 * add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
 * remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
 * check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
 * toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
 * all: S를 {1, 2, ..., 20} 으로 바꾼다.
 * empty: S를 공집합으로 바꾼다.
 */

// const solution = (input) => {
//   const [count, ...arr] = input;
//   const commands = arr.map((item) => item.split(" "));

//   const set = new Set();

//   for (let i = 0; i < count; i++) {
//     const [command, num] = commands[i];

//     if (command === "add") {
//       set.add(num);
//     } else if (command === "remove") {
//       set.delete(num);
//     } else if (command === "check") {
//       console.log(set.has(num) ? 1 : 0);
//     } else if (command === "toggle") {
//       if (set.has(num)) {
//         set.delete(num);
//       } else {
//         set.add(num);
//       }
//     } else if (command === "all") {
//       for (let i = 1; i <= 20; i++) {
//         set.add(String(i));
//       }
//     } else {
//       set.clear();
//     }
//   }
// };

const solution = (input) => {
  const [count, ...arr] = input;
  const commands = arr.map((item) => item.split(" "));

  let bit = 0;

  for (let i = 0; i < count; i++) {
    const [command, num] = commands[i];

    if (command === "add") {
      bit |= 1 << num;
    } else if (command === "remove") {
      bit &= ~(1 << num);
    } else if (command === "check") {
      const isOn = bit & (1 << num);
      console.log(isOn ? 1 : 0);
    } else if (command === "toggle") {
      bit ^= 1 << num;
    } else if (command === "all") {
      bit |= -1;
    } else {
      bit = 0;
    }
  }
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
