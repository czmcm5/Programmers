function solution(numbers, n) {
     var answer = 0;

  for (i = 0; i < numbers.length; i++) {
    if (answer <= n) {
      answer = answer + numbers[i];
    } else {
      break;
    }
  }
  return answer;
}