function solution(arr, n) {
     var answer = arr;
  var start_i = arr.length % 2 === 0 ? 1 : 0;

  for (i = start_i; i < arr.length; i += 2) {
    answer[i] = arr[i] + n;
  }
  return answer;
}