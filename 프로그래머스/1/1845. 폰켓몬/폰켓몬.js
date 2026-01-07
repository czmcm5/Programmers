const removeDuplicateNums = (nums) => {
  return [...new Set(nums)]
}


function solution(nums) {
    var answer = 0;
    const selectLimit = nums.length / 2
    
    // 중복 숫자 다 버리기
    const newArr = removeDuplicateNums(nums)
    
    // 경우의 수
    const n = newArr.length
    answer = Math.min(n,selectLimit)
    
    return answer;
}