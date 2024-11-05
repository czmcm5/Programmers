const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  n = Number(input[0]);
  let type;

  if (n % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }

  console.log(`${n} is ${type}`);
});
