function solution(n) {
    const newArr = Array.from({length: n }, (_, i) => Array.from({length: n}, (_, j) => i === j ? 1 : 0))
    
    
    return newArr;
}