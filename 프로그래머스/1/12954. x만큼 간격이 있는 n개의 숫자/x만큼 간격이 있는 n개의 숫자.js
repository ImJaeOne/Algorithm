function solution(x, n) {
    let answer = Array(n).fill(0);
    return answer.map((_, i) => x * (i + 1));
}