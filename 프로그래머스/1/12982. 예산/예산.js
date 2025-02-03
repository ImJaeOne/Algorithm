function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for(let dItems of d){
        if(sum + dItems <= budget){
            sum += dItems;
            answer++;
        }
    }
    return answer;
}