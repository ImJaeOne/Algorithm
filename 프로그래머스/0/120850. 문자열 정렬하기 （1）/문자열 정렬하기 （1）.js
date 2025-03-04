function solution(my_string) {
    const arr = my_string.split('');
    let answer = [];
    arr.forEach((a) => {
        if(!isNaN(a)){
            answer.push(Number(a));
        }
    });
    return answer.sort();
}