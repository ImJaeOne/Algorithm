function solution(strings, n) {
    var answer = [];
    // 사전 순으로 먼저 배열
    answer = strings.sort();
    // n번째 기준 배열
    answer = strings.sort((a, b) => {
        return a[n].localeCompare(b[n]);
    })
    return answer;
}