function solution(todo_list, finished) {
  const result = todo_list.filter((data, idx) => !finished[idx] && data);
  return result;
}