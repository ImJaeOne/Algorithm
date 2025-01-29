function solution(s) {
    const sArr = s.split('').sort((a, b) => a > b ? -1 : 1);
    return sArr.join('');
}