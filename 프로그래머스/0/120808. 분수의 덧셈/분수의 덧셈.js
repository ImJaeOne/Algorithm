function solution(numer1, denom1, numer2, denom2) {
    var up = numer1*denom2+numer2*denom1 , down = denom1*denom2
    var a = Math.max(up,down) , b = Math.min(up,down)
    // a % b = r (단, a > b)
    let r = a % b;
    // a, b의 최대공약수는  b, r의 최대공약수
    // b % r = r_
    // r % r_ = 0이 될 때까지 반복
    for (r; r !== 0;){        
        a = b
        b = r; 
        r = a % b;
    }
    
    return [up / b, down / b]; 
}

