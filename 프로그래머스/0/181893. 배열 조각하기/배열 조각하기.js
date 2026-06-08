function solution(arr, query) {  
  return query.reduce((r,v,i)=> 
        i % 2 === 0
            ? r.slice(0, v+1)
            : r.slice(v)
    , arr)
    
}
