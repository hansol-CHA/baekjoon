/**
 * 백준 스타트와 링크 문제
 * https://www.acmicpc.net/problem/14889
 * 스타트 팀과 링크 팀의 능력치 차이의 최소값을 구하는 문제
 * 브루트 포스 알고리즘으로 풀 수 있음
 */

// 조합을 짜서 스타트 팀과 링크 팀을 나누고 각 팀의 능력치 차이를 구해서 최소값을 구하는 문제

const solution = (input) => {
  const [N, ...rest] = input;
  const length = Number(N);
  const stats = rest.map((value) => value.split(" ").map(Number));

  const visited = new Array(length).fill(false);
  let min = Infinity;

  function getTeamAbility(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        sum += stats[team[i]][team[j]] + stats[team[j]][team[i]];
      }
    }
    return sum;
  }

  const dfs = (count, start, team) => {
    if (count === length / 2) {
      if (team[0] !== 0) return;
      const linkTeam = [];

      for (let i = 0; i < length; i++) {
        if (!visited[i]) {
          linkTeam.push(i);
        }
      }

      const startTeamAbility = getTeamAbility(team);
      const linkTeamAbility = getTeamAbility(linkTeam);

      min = Math.min(min, Math.abs(startTeamAbility - linkTeamAbility));
      return;
    }

    for (let i = start; i < length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      team.push(i);
      dfs(count + 1, i + 1, team);
      visited[i] = false;
      team.pop();
    }
  };

  dfs(0, 0, []);

  console.log(min);
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
