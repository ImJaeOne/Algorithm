function solution(n) {
    const newN = Math.sqrt(n);
    return newN % 1 === 0 ? (newN + 1) * (newN + 1) : -1;
}