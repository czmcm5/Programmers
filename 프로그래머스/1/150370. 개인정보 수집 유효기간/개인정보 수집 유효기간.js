function getTermMonth(terms, type){
    return terms.find((term) => term.includes(type)).split(" ")[1]
}

function getEndDate(date, month){
    const d = new Date(date)
    const copyDate = d
    
    copyDate.setMonth(copyDate.getMonth() + Number(month))
    
    return copyDate
}

function solution(today, terms, privacies) {
    const answer = privacies.map((item,i)=>{
        const date = new Date(item.split(" ")[0])
        const type = item.split(" ")[1]
        const m = getTermMonth(terms, type)
     
        if(new Date(today) < getEndDate(date,m)) return null
        return i + 1
    }).filter((data) => !!data)
    
    return answer;
}