function solution(k, score) {
    let answer = [];
    let sArr = [];
    score.forEach((s, idx) => {
        sArr.push(s);
        sArr.sort((a, b) => b - a);
        if(idx <= k - 1){
            answer.push(sArr[idx]);
        }else{
            answer.push(sArr[k - 1]);
        }
    })
    return answer;
}