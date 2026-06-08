function solution(n, slicer, num_list) {
    let a = slicer[0]
    let b = slicer[1]
    let c = slicer[2]
    
    switch(n) {
        case 1:
            return num_list.filter((_,i)=> i <= b );
        case 2:
            return num_list.filter((_,i)=> i >=a);
        case 3:
            return num_list.filter((_,i)=> i >=a && i <= b );
        case 4:
            return num_list.filter((_,i)=> i >=a && i <= b).filter((_,i)=>(i)%c === 0);
        default:
            throw 'err';
    }
}