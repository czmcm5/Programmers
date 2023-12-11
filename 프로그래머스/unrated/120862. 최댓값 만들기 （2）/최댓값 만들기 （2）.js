function solution(numbers) {
    var answer = 'plz';
    
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i === j){
                continue;
            } else if(answer === 'plz') {
                answer = numbers[i]*numbers[j]
            } else if(numbers[i]*numbers[j] > answer){
                answer = numbers[i]*numbers[j]
            }
        }
    }
    
    return answer;
}