function solution(intStrs, k, s, l) {
     var answer = [];

  intStrs.forEach((str, idx) => {
    const num = Number(str.substr(s, l));
    return num > k ? answer.push(num) : "";
  });

  return answer;
}