function solution(s, n) {
    var answer = '';
    var sArr = s.split('');
    var newArr = [];
    sArr.forEach((s) => console.log(s.charCodeAt()));
    sArr.forEach((s) => {
        if(s.charCodeAt() !== 32){
            if(s.charCodeAt() >= 97 && s.charCodeAt() <= 122){
                if(s.charCodeAt() + n > 122){
                    newArr.push(String.fromCharCode(s.charCodeAt() + n - 122 + 97 - 1))
                }else {
                    newArr.push(String.fromCharCode(s.charCodeAt() + n))
                }
            }
            if(s.charCodeAt() >= 65 && s.charCodeAt() <= 90){
                if(s.charCodeAt() + n > 90){
                    newArr.push(String.fromCharCode(s.charCodeAt() + n - 90 + 65 - 1))
                }else {
                    newArr.push(String.fromCharCode(s.charCodeAt() + n))
                }
            }
        }else{
            newArr.push(String.fromCharCode(s.charCodeAt()))
        }
    });
    answer = newArr.join('');
    return answer;
}