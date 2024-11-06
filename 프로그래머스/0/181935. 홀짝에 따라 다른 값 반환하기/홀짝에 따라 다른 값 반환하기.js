function solution(n) {
  var answer = 0;

  if (n % 2 !== 0) {
    for (i = 0; i < n + 1; i++) {
      if (i % 2 !== 0) {
        answer += i;
      }
    }
  } else {
    for (i = 0; i < n + 1; i++) {
      if (i % 2 === 0) {
        answer += i * i;
      }
    }
  }

  return answer;
}