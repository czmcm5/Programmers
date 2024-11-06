function case1(num) {
  return num >= 50 && num % 2 === 0;
}
function case2(num) {
  return num < 50 && num % 2 !== 0;
}

function solution(num_list) {
  let answer = num_list;

  return answer.map((num) =>
    case1(num) ? num / 2 : case2(num) ? num * 2 : num
  );
}