/**
 * 백준 문제 링크와 스타트
 * 문제 링크 : https://www.acmicpc.net/problem/15661
 * 문제 설명 :
 *
 *
 *
 *
 *
 *
 */

// const solution = (input) => {
//   const N = Number(input[0]);
//   const stats = input.slice(1).map((value) => value.split(" ").map(Number));

//   const visited = new Array(N).fill(false);
//   let min = Infinity;

//   const getTeamAbility = (team) => {
//     let sum = 0;

//     for (let i = 0; i < team.length; i++) {
//       for (let j = i + 1; j < team.length; j++) {
//         sum += stats[team[i]][team[j]] + stats[team[j]][team[i]];
//       }
//     }

//     return sum;
//   };

//   const dfs = (count, start, team) => {
//     if (count === N) {
//       return;
//     }

//     for (let i = start; i < N; i++) {
//       if (visited[i]) continue;
//       visited[i] = true;

//       const newTeam = [...team, i];
//       const linkTeam = [];

//       for (let i = 0; i < N; i++) {
//         if (!visited[i]) {
//           linkTeam.push(i);
//         }
//       }

//       const startTeamAbility = getTeamAbility(newTeam);
//       const linkTeamAbility = getTeamAbility(linkTeam);

//       min = Math.min(min, Math.abs(startTeamAbility - linkTeamAbility));

//       dfs(count + 1, i + 1, newTeam);
//       visited[i] = false;
//     }
//   };

//   dfs(0, 0, []);

//   console.log(min);
// };

const solution = (input) => {
  const N = +input[0];
  const stats = input.slice(1).map((line) => line.split(" ").map(Number));
  const visited = new Array(N).fill(false);
  let min = Infinity;

  const getAbility = (team) => {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        sum += stats[team[i]][team[j]] + stats[team[j]][team[i]];
      }
    }
    return sum;
  };

  const dfs = (idx) => {
    if (idx === N) {
      const teamA = [];
      const teamB = [];

      for (let i = 0; i < N; i++) {
        if (visited[i]) teamA.push(i);
        else teamB.push(i);
      }

      if (teamA.length === 0 || teamB.length === 0) return;

      const diff = Math.abs(getAbility(teamA) - getAbility(teamB));
      min = Math.min(min, diff);
      return;
    }

    // 두 가지 분기: i번째 사람을 teamA에 넣거나 넣지 않거나
    visited[idx] = true;
    dfs(idx + 1);

    visited[idx] = false;
    dfs(idx + 1);
  };

  dfs(0);
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
