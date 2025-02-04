function solution(s) {
    let sArr = s.split(' ');
    sArr = sArr.map((s) => {
        return s.split('').map((sItem, i) => {
            return i % 2 === 0 ? sItem.toUpperCase() : sItem.toLowerCase();
        })
    })
    sArr = sArr.map((s) => s.join(''));
    return sArr.join(' ');
}