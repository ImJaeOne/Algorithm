function solution(n, arr1, arr2) {
    let len = Math.max(...arr1, ...arr2).toString(2).length;
    let answer = Array.from({length: len}, () => []);
    const transA = arr1.map((a) => a.toString(2).padStart(len,0).split(''));
    const transB = arr2.map((a) => a.toString(2).padStart(len,0).split(''));
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            answer[i][j] = Number(transA[i][j]) + Number(transB[i][j])
        }
    }
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(answer[i][j] === 0){
                answer[i][j] = ' '
            }else{
                answer[i][j] = '#'
            }
        }
    }
    for(let i = 0; i < len; i++){
        answer[i] = answer[i].join('')
    }
    return answer;
}