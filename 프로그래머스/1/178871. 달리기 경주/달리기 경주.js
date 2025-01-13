function solution(players, callings) {
    let answer = [];
    let rank = {};
    players.forEach((p, i) => {
        rank[p] = i;
    })
    callings.forEach((c, i) => {
        const currentIndex = rank[c];
        const prevIndex = currentIndex - 1; 
        const prevPlayer = players[prevIndex];
        [players[prevIndex], players[currentIndex]] = [players[currentIndex], players[prevIndex]];
        
        rank[c] = prevIndex;
        rank[prevPlayer] = currentIndex;
    })
    
    return players;
}