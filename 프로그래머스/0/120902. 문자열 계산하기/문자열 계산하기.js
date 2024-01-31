function solution(my_string) {
    let answer = 0;
    
    // 무조건 ['숫자','연산자','숫자','연산자'...]
    let arr = my_string.split(' '); 
    
    for(i=1; i < arr.length-1; i+=2){
        if(i === 1 && arr[i]==='+'){
            answer = Number(arr[0]) + Number(arr[2]);
        } else if(i === 1 && arr[i]==='-'){
            answer = Number(arr[0]) - Number(arr[2]);
        } else if (arr[i]==='+'){
            answer += Number(arr[i+1]);
        } else{
            answer -= Number(arr[i+1]);
        }
    }
    
    return answer;
}