function solution(my_string, k) {
     var answer = "";

  var i = k;
  while (i > 0) {
    answer = answer + my_string;
    i = i - 1;
  }

  return answer;
}