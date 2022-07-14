const bubbleSort = (array: number[]): void=>{
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length-i-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
}




const arr = [10, 34, 21, 47, 3, 28]
bubbleSort(arr)
console.log(arr)