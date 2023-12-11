function solution(string) {
    var answer = '';
    
    for(let i=0; i < string.length; i++){
        // 대문자인지 판별
        if(string[i] === string[i].toUpperCase()){
           answer += string[i].toLowerCase();
           } else{
           answer += string[i].toUpperCase();
           }
    }
    
    
    return answer;
}