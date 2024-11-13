function solution(arr, queries) {
  var answer = [];


  for (idx = 0; idx < queries.length; idx++) {
    const s = queries[idx][0];
    const e = queries[idx][1];
    const k = queries[idx][2];

    const s_between_e =
      Array.from({ length: e - s + 1 }, (v, i) => arr[s + i])
        .filter((num) => num > k)
        .sort((a, b) => a - b)[0] || -1;

    answer.push(s_between_e);
  }
  return answer;
}