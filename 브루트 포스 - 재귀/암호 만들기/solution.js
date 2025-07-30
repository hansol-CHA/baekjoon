/**
 * 백준 암호 만들기 문제
 * https://www.acmicpc.net/problem/1759
 * 암호는 서로 다른 L개의 알파벳 소문자들로 구성되며
 * 최소 한 개의 모음(a, e, i, o, u)과 최소 두 개의 자음으로 구성되어 있다고 알려져 있다.
 * 또한 정렬된 문자열을 선호하는 조교들의 성향으로 미루어 보아 암호를 이루는 알파벳이 암호에서 증가하는 순서로 배열되었을 것이라고 추측된다.
 * 즉, abc는 가능성이 있는 암호이지만 bac는 그렇지 않다.`
 *
 * 생성된 모든 암호를 사전식으로 출력하는 프로그램을 작성하시오.
 */

const solution = (input) => {
  const [L, C] = input[0].split(" ").map(Number);
  const chars = input[1].split(" ").sort();
  const vowels = ["a", "e", "i", "o", "u"];

  const result = [];

  const dfs = (count, start, temp) => {
    if (count === L) {
      const vowelCount = temp.filter((char) => vowels.includes(char)).length;
      const consonantCount = temp.filter(
        (char) => !vowels.includes(char)
      ).length;

      if (vowelCount < 1 || consonantCount < 2) return;

      result.push(temp.join(""));
      return;
    }

    for (let i = start; i < C; i++) {
      temp.push(chars[i]);
      dfs(count + 1, i + 1, temp);
      temp.pop();
    }
  };

  dfs(0, 0, []);

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
