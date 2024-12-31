function solution(absolutes, signs) {
    let result = 0;
    signs.forEach((s, i) => {
        s ? result += absolutes[i] : result -= absolutes[i]
    })
    return result;
}