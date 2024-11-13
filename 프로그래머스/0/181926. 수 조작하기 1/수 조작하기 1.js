function calculate(str) {
  switch (str) {
    case "w":
      return 1;
    case "s":
      return -1;
    case "d":
      return 10;
    case "a":
      return -10;
    default:
      return 0;
  }
}

function solution(n, control) {
     return control.split("").reduce((acc, item) => acc + calculate(item), n);

}