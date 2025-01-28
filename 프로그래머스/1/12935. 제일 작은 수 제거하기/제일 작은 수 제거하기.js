function solution(arr) {
    if(arr.length <= 1){
        return [-1];
    }
    const small = Math.min(...arr);
    return arr.filter((a) => a !== small);
}