function solution(sizes) {
    let sizeArr = [];
    sizes.forEach((size) => sizeArr.push(...size));
    let max1 = Math.max(...sizeArr);
    sizes = sizes.map((size) => Math.min(...size));
    let max2 = Math.max(...sizes)
    return max1 * max2;
}