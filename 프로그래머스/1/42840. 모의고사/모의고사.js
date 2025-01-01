function solution(answers) {
    let answer = [];
    let score = [0, 0, 0]
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    answers.forEach((a, i) => {
        if(a === first[i % first.length]){            
            score[0] += 1;
        }
        if(a === second[i % second.length]){
            score[1] += 1;
        }
        if(a === third[i % third.length]){
            score[2] += 1;
        }
    })
    // 제일 큰 값 고정
    let maxScore = Math.max(...score);
    for(i = 0; i < 3; i++){
        // 제일 큰 값을 가지는 index는 계속 바뀌기 때문에 for문 내 배치
        let maxScoreIndex = score.indexOf(maxScore);
        if(maxScore === Math.max(...score)){
            answer.push(maxScoreIndex + 1);
            score.splice(maxScoreIndex, 1, 0);
        }
    }
    
    return answer;
}