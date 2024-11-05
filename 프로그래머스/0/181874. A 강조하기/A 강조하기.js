function solution(myString) {
  const arr = myString.split("");
  return arr
    .map((item) => ((item === "a" || item === "A") ? "A" : item.toLowerCase()))
    .join("");
}
