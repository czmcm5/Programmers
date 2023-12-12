function solution(num_list, n) {
    var answer = [];
    let num = 0;


    for(let i=0; i<num_list.length; i++){
        
        if(num_list[n+i] === undefined){
            answer.push(num_list[num]);
            num += 1;
            
        } else{
            answer.push(num_list[n+i]);

        }
    }
    
    return answer;
}