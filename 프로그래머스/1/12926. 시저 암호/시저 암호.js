function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    function increaseItem(sItem, type) {
        const itemIndex = type.indexOf(sItem);
        const len = type.length;
        const increaseIndex = (itemIndex + n) % type.length;
        if (itemIndex !== -1) {
            return type[increaseIndex]; 
        }
        return sItem; 
    }

    const sArr =  s.split('').map((sItem) => {
        if (upper.includes(sItem)) return increaseItem(sItem, upper);
        if (lower.includes(sItem)) return increaseItem(sItem, lower);
        return sItem; 
    }).join('');
    
    return sArr;
}
