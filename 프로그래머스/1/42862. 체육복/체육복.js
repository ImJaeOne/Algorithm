function solution(n, lost, reserve) {
    const nArr = Array.from({length: n}, () => 1);
    lost.forEach((l) => nArr[l - 1] = 0);
    reserve.forEach((r) => nArr[r - 1] = nArr[r - 1] + 1);
    nArr.forEach((n, idx) => {
        if(n === 0){
            if(nArr[idx - 1] > 1){
                nArr[idx] = 1;
                nArr[idx - 1] = nArr[idx - 1] - 1;
            }else if(nArr[idx + 1] > 1){
                nArr[idx] = 1;
                nArr[idx + 1] = nArr[idx + 1] - 1;
            }
        }
    })
    let answer = 0;
    nArr.forEach((n) => n > 0 && answer++);
    return answer;
}