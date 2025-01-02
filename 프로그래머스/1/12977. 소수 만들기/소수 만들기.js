function solution(nums) {
    let answer = 0;
    let test = [];
    let arr = []
    
    function demical(n){
        for(i = 1; i <= n ; i++){
            if(n % i === 0){
                test.push(i);
            }
        }
        if(test[1] === n){
            answer += 1;
        }
        test = [];
    }
    
    function addThree(array){
        for(i = 0; i < array.length - 2; i++){
            for(j = i + 1; j < array.length - 1; j++){
                for(k = j + 1; k < array.length; k++){
                    arr.push(array[i] + array[j] + array[k]);
                }
            }
        }
    }
    
    addThree(nums);
    arr.forEach((a) => demical(a));
    
    return answer;
}