function solution(num_str) {
    var answer = 0;

  for (i = 0; i < num_str.length; i++) {
    answer = answer + Number(num_str[i]);
  }
  return answer;
}