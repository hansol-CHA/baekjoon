/**
 * 백준 외판원 순회 문제
 * https://www.acmicpc.net/problem/10971
 *
 * 외판원이 각 도시를 한 번씩만 방문하고 원래의 도시로 돌아오는 최단 경로를 찾는 문제
 */

const solution = (input) => {
  const [N, ...rest] = input;
  const n = Number(N);
  const costs = rest.map((row) => row.split(" ").map(Number));

  let min = Infinity;
  const trace = []; // 디버깅용: 경로 및 비용 추적

  const dfs = (start, current, count, cost, visited, path) => {
    if (count === n) {
      const returnCost = costs[current][start];
      if (returnCost > 0) {
        const totalCost = cost + returnCost;
        min = Math.min(min, totalCost);
      }
      return;
    }

    for (let next = 0; next < n; next++) {
      if (!visited[next] && costs[current][next] > 0) {
        visited[next] = true;
        path.push(next);
        dfs(start, next, count + 1, cost + costs[current][next], visited, path);
        visited[next] = false;
        path.pop();
      }
    }
  };

  for (let start = 0; start < n; start++) {
    const visited = Array(n).fill(false);
    visited[start] = true;
    dfs(start, start, 1, 0, visited, [start]);
  }

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
