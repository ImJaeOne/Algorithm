function solution(n) {
    var answer = 0;
    var a = [];
    var b = [];
    for(i = 1; i <= n; i = i * 3){
        a.push(i);
    }
    a.sort((a, b) => b - a);
    for(i = 0; i < a.length; i++){
        b.push(Math.floor(n / a[i]));
        n = n % a[i];
    }
    b.reverse();
    answer = a.reduce((acc, cur, i) => {
        return acc +=  cur * b[i];
    }, 0)
    return answer;
}