function solution(number, limit, power) {
    let answer = 0;
    let numArr = [];
    let demicalArr = [];
    let demicalCnt = 0;
    
    for(i = 1; i <= number; i++){
        numArr.push(i);
    }
    
    // for문 중첩
    // 시간복잡도 최적화를 위해 Math.sqrt
    // O(N*N) -> O(N*√ N)
    numArr.forEach((n) => {
        for(i = 1; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                if(i === n / i){
                    demicalCnt++;
                }else{
                    demicalCnt += 2;                
                }
            }
        }
        demicalArr.push(demicalCnt);
        demicalCnt = 0;
    });

    answer = demicalArr.reduce((acc, cur) => {
        if(cur > limit){
            return acc + power;
        }else{
            return acc + cur;
        }
    }, 0)
    
    return answer;
}