function solution(my_string, overwrite_string, s) {
    let answer = my_string.split("");

  for (i = s; i < my_string.length; i++) {
    if (overwrite_string[i - s]) {
      answer[i] = overwrite_string[i - s];
    }
  }
  return answer.join("");
}