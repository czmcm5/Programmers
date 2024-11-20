function solution(my_string, is_prefix) {
    const idx = is_prefix.length ;
    return my_string.slice(0,idx) === is_prefix ? 1:0;
}