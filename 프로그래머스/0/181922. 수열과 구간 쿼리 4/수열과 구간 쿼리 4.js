function solution(arr, queries) {
      var answer = arr;

  for (idx = 0; idx < queries.length; idx++) {
    const s = queries[idx][0];
    const e = queries[idx][1];
    const k = queries[idx][2];

    const s_to_e = Array.from({ length: e - s + 1 }, (v, i) => s + i);
    const modify_arr = answer.map((num, idx) =>
      s_to_e[idx] % k === 0 ? num + 1 : num
    );
    answer = modify_arr;
  }
  return answer;
}