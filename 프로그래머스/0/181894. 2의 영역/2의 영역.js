function solution(arr) { 
    let data = arr.map((v, i) => (v === 2 ?  i  : null))
    .filter((v) => v !== null);    
    let data_length = data.length;
        
    switch(data_length) {
        case 0:
            return [-1];
        case 1:
            return [2] 
        default:
             return arr.filter((v,i) =>(
             i >= data[0] && i <= data[data_length-1]
            ))
    }
}