function solution(my_string, s, e) {
  const reverse_str = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  return (
    my_string.slice(0, s) +
    reverse_str +
    my_string.slice(e + 1, my_string.length)
  );
}