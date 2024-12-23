function solution(sizes) {
    var answer = 0;
    var sizesArr = []; 
    var x = [];
    var y = [];
    sizes.forEach((size, i) => {
        sizesArr[i] = size.sort((a, b) => b - a);
        x.push(sizesArr[i][0]);
        y.push(sizesArr[i][1]);
    })
    answer = Math.max(...x) * Math.max(...y);
    return answer;
}