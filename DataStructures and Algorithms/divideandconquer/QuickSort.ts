let arrItems = [1,2,3,5,6];

function arrCount(arr: number[], index: number = 0) : number{
     if(index >= arr.length){
                return 0;
     }
     return 1 + arrCount(arr, index + 1);
}

console.log(arrCount(arrItems));


