function solution(k, score) {
    var answer = [];
    var scoreArr = [];
    score.forEach((s, i) => {
        scoreArr.push(s);
        scoreArr.sort((a, b) => b - a);
        scoreArr = scoreArr.splice(0, k);
        answer.push(scoreArr[scoreArr.length-1]);
    })
    return answer;
}