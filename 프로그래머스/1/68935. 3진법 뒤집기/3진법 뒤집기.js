function solution(n) {
    let count = 0;
    let k = n;
    while(k / 3 >= 1){
        k = k / 3;
        count++;
    }
    let answer = [];
    for(let i = count; i >= 0; i--){
        let item = 1;
        for(let j = 1; j <= i; j++){
            item *= 3;
        }
        answer.push(Math.floor(n / item));
        n = n % item;
    }
    console.log(answer)
    answer.reverse();
    return answer.reduce((acc, cur, idx) => {
        for(let i = answer.length - idx; i > 1; i--){
            cur *= 3; 
        }        
        return acc + cur;
    }, 0)
}