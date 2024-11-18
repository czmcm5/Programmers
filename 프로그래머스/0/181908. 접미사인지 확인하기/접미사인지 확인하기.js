function solution(my_string, is_suffix) {
     return Array.from({ length: my_string.length }, (_, idx) =>
    my_string.slice(idx)
  )
    .sort()
    .includes(is_suffix)
    ? 1
    : 0;
}