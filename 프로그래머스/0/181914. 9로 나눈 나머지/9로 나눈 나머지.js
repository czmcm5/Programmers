function solution(num) {
  const arr = num.split("").reduce((pre, cur) => pre + Number(cur), 0);
  return arr % 9;
}