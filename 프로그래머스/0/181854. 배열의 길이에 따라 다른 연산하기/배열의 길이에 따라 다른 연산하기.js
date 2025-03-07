function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 === 0){
        arr.forEach((a, idx) => idx % 2 !== 0 ? answer.push(a + n) : answer.push(a));
    }else{
        arr.forEach((a, idx) => idx % 2 !== 0 ? answer.push(a) : answer.push(a + n));
    }
    return answer;
}