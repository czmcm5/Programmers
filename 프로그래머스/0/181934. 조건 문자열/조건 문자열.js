function solution(ineq, eq, n, m) {
   const type = ineq + eq;
  let answer;

  console.log(type);

  switch (type) {
    case ">=":
      answer = n >= m;
      break;
    case "<=":
      answer = n <= m;
      break;
    case ">!":
      answer = n > m;
      break;
    case "<!":
      answer = n < m;
      break;
    default:
      answer = false;
  }


  return answer ? 1 : 0;
}