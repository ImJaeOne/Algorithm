function solution(arr) {
    let sumArr = arr.reduce((acc, cur) => acc += cur);
    return sumArr / arr.length;
}