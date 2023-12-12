function solution(num, k) {
    var answer = 0;
    
    if(num.toString().includes(k)){
        answer = num.toString().indexOf(k)+1;
    } else{
        answer = -1;
    }
    
    return answer;
}