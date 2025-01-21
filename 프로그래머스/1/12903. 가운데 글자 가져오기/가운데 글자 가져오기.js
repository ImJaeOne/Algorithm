function solution(s) {
    let halfLen = s.length / 2;
    return s.length % 2 === 0 ? s[halfLen - 1] + s[halfLen] : s[Math.floor(halfLen)]
}