function solution(a, b, n) {
    var answer = 0;
    var plus = 0;
    var dummy = 0;
    while(n >= a){
        if(n % a === 0){
            plus = b * (n / a);
            n = plus;
            answer += plus;
        }else{
            plus = b * (Math.floor(n / a));
            dummy = n % a;
            n = plus + dummy;
            answer += plus;
        }
    }
    return answer;
}