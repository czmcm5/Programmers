function solution(hp) {
    
    const x = Math.floor(hp/5);
    const y = Math.floor((hp%5)/3);
    const z = (hp%5)%3
    
    return x+y+z;
}