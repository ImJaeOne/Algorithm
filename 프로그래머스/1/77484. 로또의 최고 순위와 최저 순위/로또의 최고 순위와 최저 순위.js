function solution(lottos, win_nums) {
    let answer = [];
    let correct = 0;
    let random = 0;
    let rank = [6, 6, 5, 4, 3, 2, 1];
    
    random = lottos.filter((l) => l === 0).length;
    for(i = 0; i < lottos.length; i++){
        if(win_nums.includes(lottos[i])){
            correct++;
        }
    }

    answer.push(rank[correct + random]);
    answer.push(rank[correct]);
    
    return answer;
}