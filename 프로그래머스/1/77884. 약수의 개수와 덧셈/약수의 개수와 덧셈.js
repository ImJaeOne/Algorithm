function solution(left, right) {
    var answer = 0;
    var num = [];
    for(i = left; i <= right; i++){
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i
    }
    return answer;
}