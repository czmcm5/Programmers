function solution(num_list) {
  var answer = num_list.sort((a, b) => a - b).filter((item, idx) => idx > 4);

  return answer;
}