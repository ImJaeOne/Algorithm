function solution(n, arr1, arr2) {
    let len = Math.max(...arr1, ...arr2).toString(2).length;
    let answer = Array.from({lenght: len}, () => []);
    console.log(answer);
    const transA = arr1.map((a) => a.toString(2).padStart(len,0).split(''));
    const transB = arr2.map((a) => a.toString(2).padStart(len,0).split(''));
    console.log(transA);
    console.log(transB);
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            // answer[i][j] = Number(transA[i][j]) + Number(transB[i][j])
        }
    }
    return answer;
}