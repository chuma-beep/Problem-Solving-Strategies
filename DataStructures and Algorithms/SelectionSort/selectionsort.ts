// Selection sort 


function  selectionSort(arr: number[]): number[]{
    const n = arr.length;

    for (let i = 0; i < n - 1; i++){
        let minIndex = i;

        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}


console.log(selectionSort([4,567,78,9,0,1]))



console.log(34)
