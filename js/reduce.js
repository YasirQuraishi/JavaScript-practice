//REDUCE PART 1 

let nums = [12,445,23,4234,21324,1234,3423];

let dupNum = nums.reduce(( acumulator, CurrentValue ) => {
    return acumulator * CurrentValue;
});

let dividingNum = nums.reduce(( acumulator, CurrentValue)=> {
    return acumulator / CurrentValue
});


//REDUCE PART 2


let maxNumber = nums.reduce((max,CurrentValue)=> {
    return Math.max(max,CurrentValue)
});

let minNumber = nums.reduce((min,CurrentValue)=> {
    return Math.min(min,CurrentValue)
});

let extraNumber = nums.reduce((sum, CurrentValue)=> {
    return sum + CurrentValue
}, 15000);

let extraEXtraNumber = nums.reduce((multiply, CurrentValue)=>{
    return multiply * CurrentValue
}, 10000);