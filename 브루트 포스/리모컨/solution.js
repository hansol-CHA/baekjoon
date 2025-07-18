/**
 * 백준 문제 리모컨
 * https://www.acmicpc.net/problem/1107
 * 문제설명:
 * 리모컨에는 버튼이 0부터 9, +, - 가 있다.
 * + 버튼은 현재 보이는 채널에서 +1 또는 -1 한 채널로 이동하는 버튼이다.
 * - 버튼은 현재 보이는 채널에서 -1 또는 +1 한 채널로 이동하는 버튼이다.
 * 채널은 무한대로 있고, 0에서 -1 한 채널은 없다.
 * 현재 100번 채널에 있음
 * 어떤 버튼이 고장났는지 주어졌을 때 최소 버튼 누르는 횟수를 구하라
 */

function solution(input) {
  const [channel, _, buttons] = input;
  const targetChannel = Number(channel);
  const brokenButtons = buttons?.split(" ").map(Number) || [];
  const availableButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (button) => !brokenButtons.includes(button)
  );

  let currentChannel = 100;

  if (targetChannel === currentChannel) {
    console.log(0);
    return;
  }

  let lowCount = Math.abs(targetChannel - 100);

  for (let i = 999999; i >= 0; i--) {
    const possible = i
      .toString()
      .split("")
      .every((digit) => {
        if (availableButtons.includes(Number(digit))) {
          return true;
        }
        return false;
      });

    if (possible) {
      const remain = Math.abs(targetChannel - i);

      lowCount = Math.min(lowCount, remain + i.toString().length);
    }
  }

  console.log(lowCount);
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
