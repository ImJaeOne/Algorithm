function solution(s) {
    var answer = 0;
    var num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    num.forEach((num, i) => {
        while(s.includes(num)){
            s = s.replace(num, i);
        } 
    })
    answer = Number(s);
    return answer;
}