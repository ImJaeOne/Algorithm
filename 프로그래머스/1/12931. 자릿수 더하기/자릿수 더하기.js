function solution(n)
{
    let answer = 0;
    let nArr = String(n).split('').map(Number);
    answer = nArr.reduce((acc,cur) => acc += cur);
    return answer;
}