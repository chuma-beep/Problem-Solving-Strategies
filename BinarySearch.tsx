
function binarySearch(arr: number[], target:number): number{
  let low = 0;
  let high = arr.length - 1;

  while ( low <= high){
    const mid = Math.floor((low + high)/2)

    if (arr[mid] === target){
      return mid;

    }else if (arr[mid] < target){
      low = mid + 1;
    }else{
      high  = mid - 1;
    }
  }
  return - 1 
}
 const nums = [1,23,4,5,45,6,61,5];
 console.log(binarySearch(nums,7)); //output -1

