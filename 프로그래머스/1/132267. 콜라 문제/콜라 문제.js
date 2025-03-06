function solution(a, b, n) {
    let answer = 0;
    let empty = n;
    let remain = 0;
    
    while(empty / a >= 1){
        remain = empty % a;
        answer += Math.floor(empty / a) * b;
        empty = Math.floor(empty / a) * b + remain;
    }
    
    return answer;
}