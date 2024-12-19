function solution(s) {
    var answer = [];
    var ss = [];
    s = s.split(' ');
    s.forEach((s, i) => {
        ss[i] = s.split('');
    })
    for(i = 0; i < ss.length; i++){
        for(j = 0; j < ss[i].length; j++){
            if(j % 2 === 0){
                answer.push(ss[i][j].toUpperCase());
            } else{
                answer.push(ss[i][j].toLowerCase());
            }
        }
        if(i < ss.length - 1){
            answer.push(' ');
        }
    }
    return answer.join('');
}