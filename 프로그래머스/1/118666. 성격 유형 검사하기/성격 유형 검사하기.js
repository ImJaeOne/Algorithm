function solution(survey, choices) {
    let answer = '';
    let personality = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0,
         A: 0, N: 0
    }
    survey.forEach((s, i) => {
        if(choices[i] < 4){
            personality[s[0]] += 4 - choices[i];
        }else if(choices[i] > 4){
            personality[s[1]] += choices[i] - 4;
        }
    })
    const keys = Object.keys(personality);
    for(i = 0; i < keys.length / 2; i++){
        if(personality[keys[2 * i]] < personality[keys[2 * i + 1]]){
            answer += keys[2 * i + 1];
        }else{
            answer += keys[2 * i];
        }
    }
    return answer;
}