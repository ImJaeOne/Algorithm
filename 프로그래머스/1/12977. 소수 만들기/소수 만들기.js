function solution(nums) {
    let sumArr = [];
    let len = nums.length;
    for(let i = 0; i < len - 2; i++){
        for(let j = i + 1; j < len - 1; j++){
            for(let k = j + 1; k < len; k++){
                sumArr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    let answer = 0;
     sumArr.forEach((n) => {
        let isPrime = true; 
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) answer++; 
    });

    return answer;
}