function solution(n) {
    let answer = 0;
    for (let k = 1; k <= 2 * n; k++) {
        if (2 * n % k === 0) {  
            let x = (2 * n - k * (k - 1)) / (2 * k);
            if (x > 0 && Number.isInteger(x)) {
                answer++;  
            }
        }
    }
    return answer;
}