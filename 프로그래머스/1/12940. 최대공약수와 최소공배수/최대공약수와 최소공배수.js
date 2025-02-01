function solution(n, m) {
    let answer = [];
    for(let i = Math.max(n, m); i >= 1 ; i--){
        if(m % i === 0 && n % i === 0){
            answer.push(i);
            break;
        }
    }
    answer.push(answer[0] * (n / answer[0]) * (m / answer[0]));
    return answer;
}