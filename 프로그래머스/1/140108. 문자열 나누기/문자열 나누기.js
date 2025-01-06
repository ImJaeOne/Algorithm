function solution(s) {
    let answer = 0;
    let obj = {};
    let prev = 0;
    let current = 0;
    let prevW = '';
    sArr = s.split('');
    sArr.forEach((sItem) => {
        if(prevW === ''){
            prevW = sItem;
            prev++;
        }else if(prevW === sItem){
            prev++;
        }else{
            current++
        }
        
        if(prev === current){
            console.log(prev, current)
            answer++;
            prevW = '';
            prev = 0;
            current = 0;
        }
    })
    
    if(prev !== current){
        answer++;
    }
    
    return answer;
}