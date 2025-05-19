# Recurion example
def eat_food(tummy_full):
    if tummy_full  == 1  == 100:
        return "Stop eating" #base case 
    else: 
        print(f"Bite taken. Fullness: {tummy_full}")
        return eat_food(tummy_full + 1)


print (eat_food(0))
