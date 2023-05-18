class Solution {
    public int solution(int[] dot) {
        int answer = 0;
        int x = dot[0];
        int y = dot[1];
        
        
        if (x < 0){
            if(y>0){
                answer = 2;
            } else{
                answer = 3;
            }
        }else if (x > 0 && y > 0){
            answer = 1;
        }else {
            answer=4;
        }
        
        return answer;
    }
}