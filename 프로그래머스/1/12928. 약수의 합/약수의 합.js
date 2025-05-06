function solution(n) {
    let answer = 0;
    const sq = Math.sqrt(n);
    for(let i = 1; i < sq; i ++){
        if(n % i === 0){
            answer =  answer + i + (n / i);
        }
    }
    if(sq % 1 === 0){
        answer+= sq;
    }
    return answer;
}