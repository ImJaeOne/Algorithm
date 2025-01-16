function solution(s){
    s = s.split('');
    let p = 0;
    let y = 0;
    s.forEach((sItem) => {
        if(sItem.toLowerCase() === 'p'){
            p++;  
        }else if(sItem.toLowerCase() === 'y'){
            y++;
        }
    })
    if(p === 0 && y === 0){
        return true;
    }else{
        return p === y;
    }
}