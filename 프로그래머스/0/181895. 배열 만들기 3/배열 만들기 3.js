function solution(arr, intervals) {
    let interval1 = intervals[0]
    let interval2 = intervals[1]
    
    let arr1 = arr.filter((_,i) => i >= interval1[0] && i <=interval1[1])
    let arr2 = arr.filter((_,i) => i >= interval2[0] && i <=interval2[1])
        
    return [... arr1, ...arr2];
}