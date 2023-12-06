function solution(n) {
    
    var num; // 최대공약수 
    function find_num(a,b){
       while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return num = a;
    };
    
    find_num(6,n);
    
    
    return n/num;
}