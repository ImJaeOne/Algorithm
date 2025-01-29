function solution(arr1, arr2) {
    let answer = Array.from({length : arr1.length}, () => []);
    arr1.forEach((arr, i) => {
        arr.forEach((arrItem, j) => {
            answer[i].push(arrItem + arr2[i][j]);
        })
    })
    return answer;
}