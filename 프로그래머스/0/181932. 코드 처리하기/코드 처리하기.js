function solution(code) {
let mode = 0;
  var answer = [];
  for (i = 0; i < code.length; i++) {
    if (mode === 0 && code[i] === "1") {
      mode = 1;
      continue;
    }
    if (mode === 0 && i % 2 === 0) {
      answer.push(code[i]);
      continue;
    }
    if (mode === 1 && code[i] === "1") {
      mode = 0;
      continue;
    }
    if (mode === 1 && i % 2 !== 0) {
      answer.push(code[i]);
      continue;
    }
  }
   return answer.join("") || "EMPTY";
}