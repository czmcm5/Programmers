class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length]; 
        
        for (int i=0; i<answer.length; i++){
            answer [i] = numbers [i]*2;
            // answer의 0번째 배열은 numbers의 0번째 배열의 값의 2배다 
        }
        
        
        return answer;
    }
}