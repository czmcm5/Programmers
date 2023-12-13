function solution(my_string) {
    // str > arr
    const array = my_string.split('').map(item => Number(item.trim()));
    // num만
    const arrayNum = array.filter(item => typeof item === 'number' && !isNaN(item));
    
    return arrayNum.slice().sort((a,b)=>a-b);
}