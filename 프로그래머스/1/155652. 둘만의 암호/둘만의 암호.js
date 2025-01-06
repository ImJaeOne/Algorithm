function solution(s, skip, index) {
    var answer = '';
    let key = 'abcdefghijklmnopqrstuvwxyz'.split('');

    skip = skip.split('');
    key = key.filter((k) => !skip.includes(k));
    
    s = s.split('');
    answer = s.map((sItem) => {
        index = index % key.length;
        if(key.indexOf(sItem) + index > key.length - 1){
            return key[key.indexOf(sItem) + index - key.length]; 
        }else{
            return key[key.indexOf(sItem) + index];
        }
    })
        
    return answer.join('');
}