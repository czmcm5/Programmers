function solution(board, k) {
  let answer = 0;

  board.forEach((r, i) => {
    r.forEach((v, j) => {
      if (i + j <= k) {
        answer += v;
      }
    });
  });

  return answer;
}