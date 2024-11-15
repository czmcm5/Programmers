function solution(l, r) {
     var answer = [];

  let i = l;
  while (i <= r) {
    const i_arr = i.toString().split("");
    const isThis =
      i_arr.filter((num) => num === "5" || num === "0").length === i_arr.length;

    if (isThis) {
      answer.push(i);
    }
    i += 1;
  }
  return answer.length === 0 ? [-1] : answer;

}