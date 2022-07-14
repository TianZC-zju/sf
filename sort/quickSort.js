const quickSort = (array)=>{
    if(array.length <= 1){
        return array;
    }

    let leftArray = []
    let rightArray = []
    for(let i=1; i<array.length; i++){
        if(array[i]<array[0]){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    return quickSort(leftArray).concat(array[0]).concat(quickSort(rightArray))
}

const arr = [10, 34, 3, 21, 47, 3, 28]
console.log(quickSort(arr));

