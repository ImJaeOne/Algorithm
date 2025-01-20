function solution(keymap, targets) {
    let answer = [];
    targets.forEach((target) => {
        let indexAnswer = 0;
        for(let t of target){
            let prev = Infinity;
            for(let k of keymap){
                if(k.indexOf(t) >= 0){
                    prev = prev > k.indexOf(t) ? k.indexOf(t) : prev;
                }
            }
            if(prev === Infinity){
                indexAnswer = -1;
                break;
            }
            indexAnswer += prev + 1;
        }
        answer.push(indexAnswer);
    })
    return answer;
}