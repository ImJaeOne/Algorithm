function solution(ingredient) {
    let answer = 0;
    let n = 0;
    
    while (n <= ingredient.length - 4) { 
        if (ingredient.slice(n, n + 4).join('') === '1231') {
            ingredient.splice(n, 4); 
            answer++; 
            n =  n - 3;
        } else {
            n++; 
        }
    }
    
    return answer;
}