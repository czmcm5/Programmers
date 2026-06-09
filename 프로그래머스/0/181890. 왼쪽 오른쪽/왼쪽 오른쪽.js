function solution(str_list) {
    const l_idx = str_list.indexOf('l');
    const r_idx = str_list.indexOf('r');
    
    const hasL = l_idx !== -1
    const hasR =  r_idx !== -1
    
    if(!hasL && !hasR) return []
    if(hasL && !hasR) return str_list.slice(0, l_idx)
    if(!hasL && hasR) return str_list.slice(r_idx+1)
    if(l_idx < r_idx) return str_list.slice(0, l_idx)
    
    return str_list.slice(r_idx+1)
}