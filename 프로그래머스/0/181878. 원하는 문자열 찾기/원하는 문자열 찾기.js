function solution(myString, pat) {
    const str = myString.toLowerCase();
    const str2 = pat.toLowerCase();
    
    
    return str.includes(str2) ? 1:0;
}