/**
 * 백준 로또 문제
 * https://www.acmicpc.net/problem/6603
 *
 * 로또 번호를 선택하는데 사용되는 가장 유명한 전략은 49가지 수 중 k(k>6)개의 수를 골라 집합 S를 만든 다음 그 수만 가지고 번호를 선택하는 것이다.
 * 예를 들어, k=8, S={1,2,3,5,8,13,21,34}인 경우
 *  ([1,2,3,5,8,13], [1,2,3,5,8,21], [1,2,3,5,8,34], [1,2,3,5,13,21], ..., [3,5,8,13,21,34])
 * 집합 S와 k가 주어졌을 때, 수를 고르는 모든 방법을 구하는 프로그램을 작성하시오.
 *
 */

const solution = (input) => {
  const array = input.slice(0, input.length - 1);
  const numbers = array.map((str) => str.split(" "));

  const result = [];

  const dfs = (count, start, nums, temp) => {
    if (count === 6) {
      console.log({ temp });

      result.push(temp.join(" "));
      return;
    }

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      dfs(count + 1, i + 1, nums, temp);
      temp.pop();
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    const [k, ...rest] = numbers[i];

    dfs(0, 0, rest, []);
    result.push("");
  }

  console.log(result.join("\n"));
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
