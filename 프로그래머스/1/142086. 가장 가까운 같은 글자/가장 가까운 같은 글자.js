function solution(s) {
    let answer = [];
    let newS = []; 
    s.split('').forEach((sItem, idx) => {       
        const findS = newS.lastIndexOf(sItem); 
        if (findS === -1) {
            answer.push(-1);
        } else {
            answer.push(idx - findS);
        }
        newS.push(sItem); 
    });
    return answer;
}
