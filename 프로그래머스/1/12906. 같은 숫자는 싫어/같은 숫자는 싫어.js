function solution(arr){
    let newArr = [arr[0]];
    let prev = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== prev){
            newArr.push(arr[i]);
        }
        prev = arr[i];
    }
    return newArr;
}