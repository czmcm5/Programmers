function calculate(num) {
  switch (num) {
    case 1:
      return "w";
    case -1:
      return "s";
    case 10:
      return "d";
    case -10:
      return "a";
    default:
      return "";
  }
}

function solution(numLog) {
    const diffs = numLog.slice(1).map((num, i) => num - numLog[i]);
  const result = diffs.map((item) => calculate(item));

  return result.join("");
}