function solution(a, b, c, d) {
  const counts = {};
  [a, b, c, d].map((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  let p = 0;
  let q = 0;
  let r = 0;

  if (entries.length === 1) {
    return 1111 * a; // 1 1 1 1
  }
  if (entries.length === 4) {
    return Math.min(a, b, c, d); // 1 2 3 4
  }
  if (entries.length === 3) {
    const test = entries.filter((item) => item[1] !== 2);
    p = test[0][0];
    r = test[1][0];

    return p * r; // 1 2 3 3
  }
  if (entries.filter((item) => item[1] !== 2).length === 0) {
    p = Number(entries[0][0]);
    q = Number(entries[1][0]);

    return (p + q) * Math.abs(p - q); // 1 2 2 2
  }
  p = Number(entries.filter((item) => item[1] === 3)[0][0]);
  q = Number(entries.filter((item) => item[1] !== 3)[0][0]);

  return Math.pow(10 * p + q, 2); // 1 1 2 2
}

