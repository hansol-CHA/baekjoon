const solution = (input) => {
  const nums = input[1].split(" ").map(Number);

  const prevPermutation = (nums) => {
    let i = nums.length - 1;

    while (i > 0 && nums[i - 1] < nums[i]) {
      i--;
    }

    if (i <= 0) {
      console.log(-1);
      return;
    }

    let j = nums.length - 1;

    while (nums[j] >= nums[i - 1]) {
      j--;
    }

    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

    const sorted = nums.splice(i).sort((a, b) => b - a);

    console.log([...nums, ...sorted].join(" "));
  };

  prevPermutation(nums);
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
