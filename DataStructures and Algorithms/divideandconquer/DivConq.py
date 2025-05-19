# Divide and conquer algorithm to find the maximum number in a list 


def find_maximum(arr):
    if len(arr) == 1:
        return arr[0] # base case 

    mid = len(arr) //2 
    left_maximum = find_maximum(arr[:mid])
    right_maximum = find_maximum(arr[mid:])

    return max(left_maximum, right_maximum)

a = [10, 12,43, 55, 22, 33, 45, 90]


print(find_maximum(a))

