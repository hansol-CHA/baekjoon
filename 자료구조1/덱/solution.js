/**
 * 백준 문제: 덱
 * 문제 번호: 10866
 * 문제 링크: https://www.acmicpc.net/problem/10866
	push_front X: 정수 X를 덱의 앞에 넣는다.
	push_back X: 정수 X를 덱의 뒤에 넣는다.
	pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	size: 덱에 들어있는 정수의 개수를 출력한다.
	empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
	front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

function solution(input) {
  let front = [];
  let back = [];
  const output = [];

  for (let i = 1; i < input.length; i++) {
    const [command, value] = input[i].split(" ");

    switch (command) {
      case "push_front":
        front.push(value);
        break;
      case "push_back":
        back.push(value);
        break;
      case "pop_front":
        if (front.length) {
          output.push(front.pop());
        } else if (back.length) {
          front = back.reverse();
          back = [];
          output.push(front.pop());
        } else {
          output.push(-1);
        }
        break;
      case "pop_back":
        if (back.length) {
          output.push(back.pop());
        } else if (front.length) {
          back = front.reverse();
          front = [];
          output.push(back.pop());
        } else {
          output.push(-1);
        }
        break;
      case "size":
        output.push(front.length + back.length);
        break;
      case "empty":
        const isEmpty = front.length === 0 && back.length === 0 ? 1 : 0;
        output.push(isEmpty);
        break;
      case "front":
        if (front.length) {
          output.push(front[front.length - 1]);
        } else if (back.length) {
          output.push(back[0]);
        } else {
          output.push(-1);
        }
        break;
      case "back":
        if (back.length) {
          output.push(back[back.length - 1]);
        } else if (front.length) {
          output.push(front[0]);
        } else {
          output.push(-1);
        }
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
