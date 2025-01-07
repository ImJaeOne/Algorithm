function solution(wallpaper) {
    let answer = [];
    let x = [];
    let y = [];
    for(i = 0; i < wallpaper.length; i++){
        for(j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                x.push(i);
                y.push(j);
            }
        }
    }
    // 유니코드상 1 10 2 20이라 x.sort()는 x
    x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
    answer = [x[0], y[0], x[x.length - 1] + 1, y[y.length - 1] + 1];
    return answer;
}