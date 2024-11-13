function solution(num_list) {
     var answer = num_list;
  const arr_length = num_list.length - 1;
  const last_item = num_list[arr_length];
  const sec_last_item = num_list[arr_length - 1];

  if (sec_last_item < last_item) {
    answer.push(last_item - sec_last_item);
  } else {
    answer.push(last_item * 2);
  }
  return answer;
}