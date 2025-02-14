function solution(s) {
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    while(isNaN(s) === true){
        for(let i = 0; i < numArr.length; i++){
            if(s.includes(numArr[i])){
                s = s.replace(numArr[i], i);
                break;
            }
        }
    }
    return Number(s);
}