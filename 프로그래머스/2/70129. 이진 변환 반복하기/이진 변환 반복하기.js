function solution(s) {
    s = s.split('').map(Number);
    let sArr = [];
    let len = 0;
    let count = 0;
    let remove = 0;
    while(s.length !== 1 || s[0] !== 1){
        s.forEach((sItem) => sItem !== 0 ? sArr.push(sItem) : remove++);
        len = sArr.length;
        count++;
        s = len.toString(2).split('').map(Number);
        sArr = []
    }
    return [count, remove];
}