function solution(num1, denom1, num2, denom2) {
    const child = (num1*denom2) +(num2*denom1);
    const parent = denom1 * denom2;
    
    var num;
    function find_num(a,b){
       while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return num = a;
    };
    find_num(child, parent);
    
    const answer = [child/num,parent/num]
    
    return answer;
}