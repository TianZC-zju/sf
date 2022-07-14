const sectionSort = (array: number[]) => {
    let minIndex = -1;
    let min = -1;
    for (let i = 0; i < array.length; i++) {
        min = array[i]
        minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j]
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
}

const arr = [10, 34, 3, 21, 47, 3, 28]
sectionSort(arr)
console.log(arr)