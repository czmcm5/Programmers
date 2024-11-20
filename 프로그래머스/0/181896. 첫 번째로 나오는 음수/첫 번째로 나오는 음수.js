function solution(num_list) {
  for (i = 0; i < num_list.length; i++) {
    if (num_list[i] !== Math.abs(num_list[i])) {
      console.log(Math.abs(num_list[i]));
      return i;
    }
  }
  return -1;
}
