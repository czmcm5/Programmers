function solution(num_list) {
      const list_odd = num_list
    .filter((data, idx) => idx % 2 === 0)
    .reduce((a, b) => a + b, 0);
  const list_even = num_list
    .filter((data, idx) => idx % 2 !== 0)
    .reduce((a, b) => a + b, 0);

  return list_odd > list_even ? list_odd : list_even;
}