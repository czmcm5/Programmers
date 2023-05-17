class Solution {
    public int solution(int n, int k) {
        int answer = (12000 * n) + (2000 * k);
        
        // 근데 이럴거면 굳이 if쓸필요가 없엇네.. ㅋ 어짜피 몫구하면 0이니깜.. 
        if (n >= 10){
            answer = answer - 2000 * (n/10);
        }
        
        return answer;
    }
}