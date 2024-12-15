function solution(arr1, arr2) {
    var answer = [];
    var a = [];
    for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr1[0].length; j++){
            a.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(a);
        a = [];
    }
    return answer;
}