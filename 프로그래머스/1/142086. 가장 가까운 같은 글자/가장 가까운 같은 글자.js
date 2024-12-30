function solution(s) {
    var answer = [];
    var sArr = s.split('');
    var a = {};
    
    sArr.forEach((sItem, i) => {
        if(!a[sItem]){
            a[sItem] = [i];
            answer.push(-1);
        }else{
            a[sItem].push(i);  
            answer.push(a[sItem][a[sItem].length - 1] - a[sItem][a[sItem].length - 2]);
        }
    })
    return answer;
}