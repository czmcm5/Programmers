function solution(str_list) {
    const l = str_list.indexOf('l');
    const r = str_list.indexOf('r');
    
    const hasL = l !== -1
    const hasR =  r !== -1
    
    if(!hasL && !hasR) return []
    if(hasL && !hasR) return str_list.slice(0, l)
    if(!hasL && hasR) return str_list.slice(r+1)
    if(l < r) return str_list.slice(0, l)
    
    return str_list.slice(r+1)
}