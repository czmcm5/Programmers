/*
이전 코드의 피드백: .map()을 사용하는 것은 해당 메서드의 용도와 맞지 않다. 누군가가 코드를 읽을 때 의도를 쉽게 알 수 없다.
개선 사항: 배열을 순회하는 용도의 메서드 .forEach()를 사용하거나 배열의 요소를 누산하는 .reduce를 사용하기
*/

function solution(str_list, ex) {
  const answer = str_list.reduce((acc, item) =>
    item.includes(ex) ? acc : acc + item,''
  );

  return answer;
}
