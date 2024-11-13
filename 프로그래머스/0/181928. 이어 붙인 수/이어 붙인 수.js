function solution(num_list) {
  const arr_홀수 = num_list.filter((num) => num % 2 === 0).join("");
  const arr_짝수 = num_list.filter((num) => num % 2 !== 0).join("");
  const result = Number(arr_홀수) + Number(arr_짝수);

  return result;
}