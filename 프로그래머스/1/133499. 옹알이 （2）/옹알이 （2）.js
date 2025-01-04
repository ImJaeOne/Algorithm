function solution(babbling) {
    let answer = 0;
    let possible = ["aya", "ye", "woo", "ma"];
    babbling.forEach((b) => {
        let pre = '';
        let flag2 = false;
        while(b.length > 0 && !flag2){  
            let flag = false;
            for (let p of possible) {
                if(b.includes(p) && b.indexOf(p) === 0 && p !== pre){
                    b = b.replace(p,'');
                    pre = p;
                    flag = true;
                    break;
                }
            }
            if(!flag){
                flag2 = true;
            }
        }
        if(b.length === 0){
            answer++;
        }
    });
    
    return answer;
}