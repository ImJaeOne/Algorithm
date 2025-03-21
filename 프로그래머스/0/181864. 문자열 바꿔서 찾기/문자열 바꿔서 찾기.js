function solution(myString, pat) {
    const newMyString = myString.split('').map((a) => a === 'A' ? 'B' : 'A').join('');
    if(newMyString.includes(pat)){
        return 1;
    }
    return 0;
}