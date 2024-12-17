function solution(n, m) {
    var answer = [];
    var a = Math.min(n, m);
    var b = Math.max(n, m);
    for(i = a; answer.length === 0; i--){
        if(a % i ===0){
            if(b % i === 0){
            answer.push(i);
            }
        }
    }
    if(answer[0] !== 1){
        answer.push(a * b / answer[0]);
    }else{
        answer.push(a * b);
    }
    return answer;
}