function solution(s) {
    const sArr= s.split('');
    if(s.length !== 4 && s.length !==6){
        return false;
    }
    for(let sItem of sArr){
        if(isNaN(sItem)){
            return false;
        }
    }

    return true;
}