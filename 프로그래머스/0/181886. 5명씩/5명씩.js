function solution(names) {
  const result = names.filter((data, idx) => idx % 5 === 0 && data);
  return result;
}