/**
 * 백준 문제 다음 순열
 * https://www.acmicpc.net/problem/10972
 * 첫째 줄에 N(1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄에 순열이 주어진다.
 * 첫째 줄에 다음 순열을 출력한다. 다음 순열이 없다면 -1을 출력한다.
 */

const nextPermutation = (nums) => {
  let i = nums.length - 1;

  // Step 1. 뒤에서부터 처음으로 nums[i - 1] < nums[i]인 지점 찾기
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--;
  }

  // 브레이크포인트 설정 위치 2
  if (i === 0) {
    console.log(-1); // 이미 마지막 순열
    return;
  }

  // Step 2. nums[i - 1]보다 큰 값 중 가장 끝에 있는 값 j 찾기
  let j = nums.length - 1;
  while (nums[j] <= nums[i - 1]) {
    console.log(
      `j=${j}, nums[${j}]=${nums[j]} <= nums[${i - 1}]=${nums[i - 1]}`
    );
    j--;
  }
  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

  // Step 4. nums[i:]를 오름차순 정렬 (reverse: 이미 내림차순이므로 뒤집기만 하면 됨)
  const rest = nums.splice(i).reverse();
  nums.push(...rest);

  console.log(nums.join(" "));
};

const solution = (input) => {
  const N = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  nextPermutation(nums);
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
