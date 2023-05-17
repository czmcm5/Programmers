class Solution {
    public int[] solution(int[] num_list) {
        // answer의 배열의 길이는 num_list의 배열의 길이 이다.
        int[] answer = new int[num_list.length];
        
        // 배열의 index는 0부터 시작함
        // index가 거꾸로 되면 되겟징
        for (int i=0; i<num_list.length; i++){
            answer[num_list.length - 1 - i] = num_list[i];
        }
        
        return answer;
    }
}