function solution(my_strings, parts) {
  var answer = [];

  my_strings.map((string, i) => {
    const s = parts[i][0];
    const e = parts[i][1];

    return answer.push(string.slice(s, e + 1));
  });

  return answer.join("");
}