function solution(a, b) {
    let month = 1;
    let day = 0;
    let dayName = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    
    for(i = 1; i < a; i++){
        console.log(i);
        if(i <= 7){
            if(i % 2 === 1){
            day += 31;
            }else{
                if(i / 2 === 1){
                    day += 29;
                }else{
                    day += 30;                
                }
            }
        }else{
            if(i % 2 === 1){
                day += 30;
            }else{
                day += 31;
            }
        }
        
    }
    
    day += b;
    
    return dayName[day % 7];
}