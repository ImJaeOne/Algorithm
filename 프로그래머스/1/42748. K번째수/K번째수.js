function solution(array, commands) {
    var answer = [];
    var sliceArr = '';
    commands.forEach((command) => {
        sliceArr = [...array].splice(command[0] - 1, command[1] - command[0] + 1);
        sliceArr.sort((a, b) => a - b);
        answer.push(sliceArr[command[2] - 1]);
    })
    return answer;
}