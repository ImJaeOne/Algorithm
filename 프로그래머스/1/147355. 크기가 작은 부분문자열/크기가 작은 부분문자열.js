function solution(t, p) {
    let answer= 0;
    for(let i = 0; i <= t.length - p.length; i++){
        let tArr = t.split('')  
        tArr.slice(i, i + p.length).join('') <= p && answer++;
    }
    return answer;
}