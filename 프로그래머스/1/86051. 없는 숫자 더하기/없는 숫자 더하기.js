function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a - b);
    let j = 0;
    for(let i = 0; i < 10; i++){
        numbers[j] === i ? j++ : answer += i; 
    }
    return answer;
}
0,1,2,3,4,5,6,7,8