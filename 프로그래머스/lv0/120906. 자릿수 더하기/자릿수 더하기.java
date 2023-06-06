class Solution {
    public int solution(int n) {
        int answer = 0;
        
        while(n > 0){ // n이 0보다 클 때만 실행하겠다.(ex) 1234
            answer += n % 10; // 초기엔 1의 자리가 저장됨 (ex) 4
            n /= 10; // n을 123으로 만들고 처음으로 돌아감
        }
        
        return answer;
    }
}