function solution(str_list, ex) {
  const answer = str_list.reduce((acc, item) =>
    item.includes(ex) ? acc : acc + item,''
  );

  return answer;
}