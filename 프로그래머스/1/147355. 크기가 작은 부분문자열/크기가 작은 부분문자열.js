function solution(t, p) {
    var answer = 0;
    var t = t.split('');
    var t_ = [];
    var n = [];
    for(i = 0; i < t.length - p.length + 1; i++){
        t_ = t.slice(i, i + p.length).join('');
        if(Number(t_) <= Number(p)){
            answer += 1;
        }
    }
    return answer;
}