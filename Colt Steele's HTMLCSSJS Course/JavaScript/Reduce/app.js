const arr = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;

//example reduce code:
//[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//return accumulator + currentValue
//})
//In the above code, the reduce function works by taking the accumulator which in this instance is 3 and currentValue points to 5. This makes 8. So now 8 is the accumulator and 7 is the currentValue which makes 15. Then 15 is the accumulator and 9 is the currentValue, etc etc to the ending value of 35.

total = arr.reduce((total, price) => {
    return total + price
})
//total comes to 111.97 which is correct.