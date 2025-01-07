function solution(today, terms, privacies) {
    let answer = [];
    let todayNum = Number(today.split('.').join(''));
    let termArr = {};

    terms.forEach((t) => {
        let tArr = t.split(' ');
        termArr[tArr[0]] = Number(tArr[1]); 
    });

    privacies.forEach((p, i) => {
        let [startDate, type] = p.split(' ');
        let [year, month, day] = startDate.split('.').map(Number);

        let duration = termArr[type]; 
        let dayNum = (year * 12 + (month - 1)) * 28 + day + duration * 28;

        let todayNum = (Number(today.split('.')[0]) * 12 + (Number(today.split('.')[1]) - 1)) * 28 + Number(today.split('.')[2]);
        if (dayNum <= todayNum) {
            answer.push(i + 1);
        }
    });

    return answer;
}
