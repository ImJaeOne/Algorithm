function solution(food) {
    let answer = [];
    for(let i = 1; i < food.length; i++){
        let half = Math.floor(food[i] / 2);
        if(half >= 1){
            for(let j = 0; j < half; j++){
                answer.push(i)
            }
        }
    }
    let reverseAns = [...answer].reverse();
    answer.push(0);
    return answer.concat(reverseAns).join('');
}