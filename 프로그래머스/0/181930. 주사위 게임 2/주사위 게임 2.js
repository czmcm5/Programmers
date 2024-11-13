function solution(a, b, c) {
    const result = a + b + c;
  const xn2 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  const xn3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);

  if (a == b && b == c) {
    return result * xn2 * xn3;
  }
  if (a !== b && a !== c && c !== b) {
    return result;
  }
  return result * xn2;
}