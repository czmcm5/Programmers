const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  for (i = 0; i < line.length; i++) {
    if (line[i] === line[i].toLowerCase()) {
      input.push(line[i].toUpperCase());
    } else {
      input.push(line[i].toLowerCase());
    }
  }
  console.log(input.join(""));
}).on("close", function () {});
