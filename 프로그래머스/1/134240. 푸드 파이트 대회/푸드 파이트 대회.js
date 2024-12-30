function solution(food) {
    var answer = [];
    var reverseAnswer = [];
    for(i = 1; i < food.length; i++){
        if(food[i] > 1){
            for(j = 0; j < Math.floor(food[i] / 2); j++){
                answer.push(i);
            }
        }
    }
    reverseAnswer = [...answer].reverse();
    for(i = 0; i < food[0]; i++){
        answer.push(i);
    }
    answer = answer.concat(reverseAnswer);
    return answer.join('');
}