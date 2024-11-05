function solution(myString, pat) {
     const pat_arr = pat.split("");
  const reverse_pat = pat_arr
    .map((item) => (item === "A" ? "B" : "A"))
    .join("");

  if (myString.includes(reverse_pat)) return 1;
  return 0;
}