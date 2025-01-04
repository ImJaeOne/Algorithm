function solution(X, Y) {
    let answer = [];
    // 시간 복잡도 O(N^2) -> O(N+N+N)
//     let more = X.length > Y.length ? X : Y;
//     let less = X.length > Y.length ? Y : X;
    
//     for(let l of less){
//         if(more.includes(l)){
//             answer.push(l);
//             more = more.replace(l, '');
//             less = less.replace(l, '');
//         }
//     }
//     if(answer.length === 0){
//         answer.push(-1);
//     }
//     answer.sort((a, b) => b - a);
//     answer = answer.join('');
//     answer = Number(answer);
//     return String(answer);
    X = X.split('');
    Y = Y.split('');
    
    let countX = {};
    let countY = {};
    
    X.forEach((x) => {
        if(countX[x]){
            countX[x]++;
        }else{
            countX[x] = 1;
        }
    })
    
    Y.forEach((y) => {
        if(countY[y]){
            countY[y]++;
        }else{
            countY[y] = 1;
        }
    })
    console.log(countX);
    for(let key in countX){
        if(countY[key] && key !== '0'){
            let commonCount = Math.min(countX[key], countY[key]);
            for(i = 0; i < commonCount; i++){
                answer.push(key);
            }
        }
        if(countY[key] && key === '0'){
            answer.push(key);
            countX[key]--;
            countY[key]--;
        }
    }
    answer.sort((a, b) => b - a)
    if(!answer.length){
        answer.push(-1);
    }
    if(answer.length && answer[0] !== '0'){
        for(i = 0; i < Math.min(countX[0], countY[0]); i++){
            answer.push(0);
        }
    }
    return answer.join('');
}