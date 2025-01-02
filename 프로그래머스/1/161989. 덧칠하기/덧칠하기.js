function solution(n, m, section) {
    var answer = 0;
    let sectionArr = Array(n).fill(true);
    section.forEach((s) => {
        sectionArr[s - 1] = false;
    })
    while(sectionArr.includes(false)){
        let pIndex = sectionArr.indexOf(false);
        sectionArr.splice(pIndex, m, true);
        answer += 1;
    }
    return answer;
}