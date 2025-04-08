** Binary Search 

*Binary Search Is a divide an conquer algorithm, as the name implies, it works by continuously dividing the search interval in half. Note that it used only when the dataset is sorted.*


> e.g 
   an array of integers which is sorted in ascending order, and an integer 'target', we are tasked to write a function that determines if 'target' exists in the array of integers, and if it doesn't exist return -1. 

### pseudocode example 
 numbers = [1, 2, 4, 6, 7, 9, 12]
 target = [6]

 low = 0
 high = length of the dataset -1

 while low <= high

  mid = low + high
  guess = list[mid]
  
  if guess == target 
     return mid
  else if guess > target 
   high = mid - 1
  else
   low = mid + 1 
return -1 


