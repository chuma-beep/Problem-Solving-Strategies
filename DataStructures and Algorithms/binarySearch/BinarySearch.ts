
// Binary search ts 

// say we have an array of numbers 
//const numArr: number[] = [1,2,3,4,5,6,7,8,9,10];
//we are trying to get 2
//const value = 1;

function binarySearch(numArr: number[], value: number): number {
  
    let lo = 0;
    let hi = numArr.length - 1;

    while( lo <= hi){
        const mid = Math.floor((lo + hi) / 2);
        if (numArr[mid] == value){
            return mid;
        }else if (numArr[mid] < value){
            return lo = mid + 1
        }else{
           return hi = mid - 1;
        }
    }

 return - 1;
}

let i = 2
console.log(i)

console.log(binarySearch(numArr, value))
