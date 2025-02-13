function solution(numbers) {
    var answer = [];
    let len = numbers.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            if(answer.indexOf(numbers[i] + numbers[j]) === - 1){
                answer.push(numbers[i] + numbers[j])
            }
        } 
    }
    return answer.sort((a, b) => a - b);
}