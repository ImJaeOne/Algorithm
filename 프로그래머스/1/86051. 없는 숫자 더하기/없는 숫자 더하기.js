function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a - b);
    let j = 0;
    for(let i = 0; i < 10; i++){
        numbers[j] === i ? j++ : answer += i; 
    }
    return answer;
}