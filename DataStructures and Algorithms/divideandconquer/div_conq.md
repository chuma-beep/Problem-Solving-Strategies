# Divide and Conquer 

As the name implies it's about breaking down the data into smaller pockets or nodes and sorting or searching throughout the divided sections first our aim is to conquer the problem/data set by breaking it into smaller pieces till we get what we want.


Now let's imagine this 'data' is a big meal right and the nodes will be the chunks we take out of it.

**Divide** - this is splitting the main problem in smaller problems aka taking smaller chunks out of meal.
**Conquer** - Solving each problem(often recursively). e.g. the same way we chew until our meal is soft enough to swallow.
**Combine** - this is merging together to get the full solution. e.g. the food merges in our tummy to create satisfaction. 


### Analogies Aside 

#### it's often used in 

- Sorting (Merge Sort, Quick Sort)
- searching (Binary Search)
- Multiplication (Karatsuba, Algorithm)
- Geometry problems(Closet pair, Convex Hull)
- Signal Processing (fast Fourier Transform)




- this a typescript example of divide and conquer using recursion.
```ts 
let arrItems = [1,2,3,5,6];

function arrCount(arr: number[], index: number = 0) : number{
     if(index >= arr.length)
                return 0;
}
console.log(arrCount(arrItems))

```

