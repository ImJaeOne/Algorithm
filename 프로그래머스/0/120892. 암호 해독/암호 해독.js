function solution(cipher, code) {
    const cArr = cipher.split('');
    let answer = ''; 
    cArr.forEach((c, idx) => {
        if(idx % code === code - 1){
            answer += c;
        }
    })
    return answer;
}