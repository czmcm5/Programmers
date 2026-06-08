function solution(arr, query) {  
    let result = arr;
    
    const answer = query.map((v,i)=> {
        let update = result
        if(i % 2 === 0){
           result = update.filter((_,i)=> i <= v)
        } else {
            result = update.filter((_,i)=> i >= v)
        }
    })
    return result;
}