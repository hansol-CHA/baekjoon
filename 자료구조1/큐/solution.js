/**
 * 문제 큐
 * https://www.acmicpc.net/problem/10845
 * push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다. // shift 메서드
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

 */

function solution(input) {
  const [, ...commands] = input;
  const output = [];
  const queue = [];
  let head = 0;

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i].split(" ");

    switch (command) {
      case "push":
        queue.push(value);
        break;
      case "pop":
        output.push(queue.length > head ? queue[head++] : -1);
        break;
      case "size":
        output.push(queue.length - head);
        break;
      case "empty":
        output.push(queue.length - head ? 0 : 1);
        break;
      case "front":
        output.push(queue.length > head ? queue[head] : -1);
        break;
      case "back":
        output.push(queue.length > head ? queue[queue.length - 1] : -1);
        break;
    }
  }

  console.log(output.join("\n"));
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
