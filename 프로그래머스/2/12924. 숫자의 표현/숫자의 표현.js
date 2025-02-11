function solution(n) {
    let answer = 0;
    const sum = (a, b) => {return (b * (b + 1) / 2) - ((a - 1) * a / 2)};
    for(let i = 1; i <= n; i++){
        for(let j = i; j <= n; j++){
            if(sum(i, j) === n){
                answer++;
                break;
            }
            if(sum(i, j) > n){
                break;
            }
        }
    }
    return answer;
}