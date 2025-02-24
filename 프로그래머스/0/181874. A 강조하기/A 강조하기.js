function solution(myString) {
    return myString.split('').map((s) => {
        if (s === 'a') {
            return 'A';
        } else if (s === s.toUpperCase() && s !== 'A') {
            return s.toLowerCase();
        } else {
            return s;
        }
    }).join('');
}