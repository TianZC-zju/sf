const insertionSort = (array: number[])=>{

    //这里为1,是要把第一个看做已经拍好序的
    for(let i=1;i<array.length;i++){

        // j<i 为了让i位置的元素找到自己合适的位置
        for(let j=0;j<i;j++){
            if (array[i]<array[j]){
                array.splice(j,0,array[i])
                array.splice(i+1,1)
                break
            }
        }
    }
}



const arr = [10, 34, 21, 47, 3, 28]
insertionSort(arr)
console.log(arr)