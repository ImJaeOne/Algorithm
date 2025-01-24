function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n);
    for(let i = 1; i <= sqrt; i++){
        if(i === sqrt){
            answer += sqrt;
        }else if(n % i === 0){
            answer += i + n / i ; 
        }
    }
    return answer;
}