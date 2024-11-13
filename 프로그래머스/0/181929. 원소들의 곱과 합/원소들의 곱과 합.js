function solution(num_list) {
  const sum_x = num_list.reduce((acc, item) => acc * item, 1);
  const sum_plus = num_list.reduce((acc, item) => acc + item, 0);
  const sum_plus_pow = Math.pow(sum_plus, 2);


  return sum_x < sum_plus_pow ? 1 : 0;
}