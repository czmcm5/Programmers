function solution(str1, str2) {
    return str2.split(str1)[0] === str2 ? 0:1;
}