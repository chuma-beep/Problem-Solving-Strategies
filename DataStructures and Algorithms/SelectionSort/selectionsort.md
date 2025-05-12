# Selection Sort 

Though selection sort is a neat algorithm it's not very fast. It work's by dividing the input into two an unsorted and a sort sub-list and starts moving data from either the smallest or largest element into the sorted sub-list.

- Time is O(n2)
- Space is O(1)

# Pseudo code

```
 for currentIndex from 0 to len(array):
    smallestIndex = currentIndex
    #find the smallest element 
    for j in currentIndex+1 to len (array):
        if array [smallestIndex] > array[j]:
            smallestIndex = j
    swap array[currentIndex] and array[smallestIndex]
```
