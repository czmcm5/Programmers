function solution(n, k) {
    let length = Math.floor(n/k)
    return Array(length).fill().map((v,i) => v = k*(i+1));
}