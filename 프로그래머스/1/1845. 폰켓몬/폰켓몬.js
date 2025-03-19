function solution(nums) {
    let newNums = [];
    nums.forEach((num) => !newNums.includes(num) && newNums.push(num));
    if(newNums.length >= nums.length / 2){
        return Math.floor(nums.length / 2);
    }else{
        return newNums.length;
    }
}