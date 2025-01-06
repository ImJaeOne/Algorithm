function solution(n, lost, reserve) {
    let answer = n;
    let clothes = Array(n).fill(1); 

    lost.forEach((l) => {
        clothes[l - 1]--;
    });

    reserve.forEach((r) => {
        clothes[r - 1]++;
    });
    
    clothes.forEach((c, i) => {
        if(clothes[i] === 0){
            if(clothes[i - 1] === 2){
                clothes[i - 1]--;
                clothes[i]++
            }else if(clothes[i + 1] === 2){
                clothes[i + 1]--;
                clothes[i]++;
            }else{
                answer--;
            }
        }
    })
    
    return answer;
}