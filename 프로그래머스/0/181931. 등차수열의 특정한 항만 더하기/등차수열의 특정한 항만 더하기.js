function solution(a, d, included) {
     const a_count = included.filter((data) => data).length;
  const d_idx_arr = included
    .map((data, idx) => (data ? idx : -1))
    .filter((index) => index !== -1);
  const d_count = d_idx_arr.reduce((sum, index) => sum + index, 0);

  return a * a_count + d * d_count;
}