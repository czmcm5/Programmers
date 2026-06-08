function solution(arr, k) {
    var answer = k % 2 === 0 ? arr.map((v)=>v+k):arr.map((v)=>v*k);
    return answer;
}