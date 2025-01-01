function solution(k, m, score) {
    let answer = 0;
    let arr = [];
    score.sort();
    for(i = 0; i < score.length; i++){
        arr.push(score[score.length - 1 - i]);
        if(arr.length === m){
            if(Math.min(...arr) > k){
                answer += k * m;
            }else{
                answer += Math.min(...arr) * m        
            }
            arr = [];
        }   
    }
    return answer;
}