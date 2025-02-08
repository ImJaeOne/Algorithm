function solution(sizes) {
    sizes = sizes.map((size) => [Math.max(...size), Math.min(...size)]);
    let answerArr = sizes.reduce((acc, cur) => {
        return acc = [Math.max(acc[0],cur[0]),Math.max(acc[1], cur[1])];
    }, [0, 0])
    return answerArr[0] * answerArr[1]
}