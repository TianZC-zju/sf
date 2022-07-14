const   twoSum =(array, sum)=>{
    let resultMap = {}

    for(let i =0;i<array.length; i++){
        let number = array[i]
        let number2 = sum-number
        if(number2 in resultMap){
            return [resultMap[number2], i]
        }
        resultMap[number] = i;
    }
}

console.log(twoSum([2,9,7,11], 9));

