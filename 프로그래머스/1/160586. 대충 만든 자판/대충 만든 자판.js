function solution(keymap, targets) {
    let answer = Array(targets.length).fill(0);
    let minKey = {};
    
    keymap.forEach((k) =>{
        k.split('').forEach((kItem, i) => {
            if(!minKey[kItem]){
                minKey[kItem] = i + 1;
            }else{
                if(minKey[kItem] > i + 1){
                    minKey[kItem] = i + 1;
                }
            }
        })
    })
    
     targets.forEach((t, i) => {
        for (const tItem of t) {
            if (minKey[tItem]) {
                answer[i] += minKey[tItem];
            } else {
                answer[i] = -1;
                break;
            }
        }
    });

    return answer;
}