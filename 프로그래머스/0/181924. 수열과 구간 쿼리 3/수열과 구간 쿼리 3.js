
    function solution(arr, queries) {
  var answer = arr;
  for (i = 0; i < queries.length; i++) {
    const x = queries[i][0];
    const y = queries[i][1];

    const anser_x = answer[x];
    const anser_y = answer[y];

    answer[x] = anser_y;
    answer[y] = anser_x;
  }
  return answer;


}