function solution(array, commands) {
    let answer = [];
    let newArray = []
    commands.map((command) => {
        newArray = [...array].slice(command[0] - 1, command[1]).sort((a, b) => a - b);
        answer.push(newArray[command[2] - 1]);
    })
    return answer;
}