function solution(s) {
    var answer = false;
    var len = s.length;
    s = s.split('').map(Number);
    if(len === 4 || len === 6){
        answer = true;
        s.forEach((a) => {
            if(isNaN(a)){
                return answer = false;
            }
        });
    }
    return answer;
}