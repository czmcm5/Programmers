function solution(age) {
  let eng_arr = ['a','b','c','d','e','f','g','h','i','j'];
  // 23 -> [2,3]
  let age_arr =  Array.from(String(age), Number);
    
    let answer = ''
    for (let i=0; i<age_arr.length; i++){
        answer += eng_arr[age_arr[i]]
    }

    return answer;
}