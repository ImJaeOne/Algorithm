function solution(order) {
    let answer = 0;
    const arr = String(order).split('');
    const a = ['3', '6', '9']; 
    arr.forEach((o) => {
        if(a.includes(o)){
            answer++;
        }
    })
    return answer;
}