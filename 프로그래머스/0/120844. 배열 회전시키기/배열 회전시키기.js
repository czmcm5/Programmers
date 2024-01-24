function solution(numbers, direction) {
    let answer = [];
    
    if(direction === 'left'){
        for(let i = 0; i < numbers.length; i++){
            if(i === numbers.length - 1){
                answer.push(numbers[0]);
            } else{
                answer.push(numbers[i+1]);
            }
}
    } else{
        for(let i = 0; i < numbers.length; i++){
            if(i === 0){
                const num = numbers.length-1;
                answer.push(numbers[num]);
            } else{
                answer.push(numbers[i-1]);
            }
        
    }}
    
    return answer;
}