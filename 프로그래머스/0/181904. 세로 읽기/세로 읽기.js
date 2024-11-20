function solution(my_string, m, c) {
      return my_string.split("").filter((_, i) => (i - c + 1) % m === 0).join('');

}