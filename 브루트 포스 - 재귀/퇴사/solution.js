/**
 * 백준 퇴사 문제
 * https://www.acmicpc.net/problem/14501
 *
 */

const solution = (input) => {
  const [day, ...rest] = input;
  const length = Number(day);
  const schedules = rest.map((value) => value.split(" ").map(Number));

  //   let maxBenefit = 0;

  //   const dfs = (currentDay, sum) => {
  //     if (currentDay >= length) {
  //       maxBenefit = Math.max(maxBenefit, sum);
  //       return;
  //     }

  //     const [time, benefit] = schedules[currentDay];

  //     console.log({ currentDay, sum, time, benefit });

  //     if (currentDay + time <= length) {
  //       dfs(currentDay + time, sum + benefit);
  //     }

  //     dfs(currentDay + 1, sum);

  //     // for (let i = currentDay; i < length; i++) {
  //     //   const [time, benefit] = schedules[i];

  //     //   const nextDay = i + time;
  //     //   const nextSum = nextDay > length ? sum : sum + benefit;

  //     //   dfs(nextDay, nextSum);
  //     // }
  //   };

  //   dfs(0, 0);

  const dp = new Array(length + 1).fill(0);

  for (let i = length - 1; i >= 0; i--) {
    const [time, benefit] = schedules[i];

    if (i + time <= length) {
      dp[i] = Math.max(dp[i + 1], dp[i + time] + benefit);
    } else {
      dp[i] = dp[i + 1];
    }
  }

  console.log(dp[0]);
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
