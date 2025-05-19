// Recursion


function eat_food(tummy_full: number): string{
   if (tummy_full == 10){
       return "tummy is full";
   }else{
     console.log(`Took a bit. Fullness: ${tummy_full}`);
       eat_food(tummy_full + 1)
   }

} 


console.log(eat_food(8))

