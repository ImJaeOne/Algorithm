function solution(x) {
    const xArr = String(x).split('').map(Number);
    return x % xArr.reduce((acc, cur) => acc + cur) === 0 ? true : false;
}