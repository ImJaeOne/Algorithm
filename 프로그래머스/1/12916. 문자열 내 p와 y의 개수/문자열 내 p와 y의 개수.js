function solution(s){
    let countP = 0;
    let countY = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i].toLowerCase() === 'p'){
            countP++;
        }else if(s[i].toLowerCase() === 'y'){
            countY++;
        }
    }
    if(countP === countY){
        return true;
    }else{
        return false;
    }
}