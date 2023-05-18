class Solution {
    public String solution(String my_string) {
        
        StringBuffer sb = new StringBuffer(my_string); // StringBuffer 객체 sb 생성
        String answer = sb.reverse().toString(); // toString() 해야 출력 가능
        
        return answer;
    }
}