#Selection sort 

# this function stores the smallest value and stores the index.
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
      if arr[i] < smallest:
          smallest = arr[i]
          smallest_index = i 
    return smallest_index 


 # selectionSort 

def selectionSort(arr):
      newArr = []
      for i in range(len(arr)):
          smallest = findSmallest(arr)
          newArr.append(arr.pop(smallest))
      return newArr 

print(selectionSort([5, 3, 7, 1, 4, 9, 10, 2]))
