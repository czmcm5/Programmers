function solution(rsp) {
    let a = '';
    for(i=0; i<rsp.length+1; i++){
        if(rsp[i] === '2'){
            a += '0';
        } else if(rsp[i] === '0'){
            a += '5';
        } else if(rsp[i] === '5'){
            a += '2';
        }
    }
    
    return a ;
}