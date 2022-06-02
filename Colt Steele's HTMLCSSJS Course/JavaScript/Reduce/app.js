const arr = [9.99, 1.50, 19.99, 49.99, 30.50];

//example reduce code:
//[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//return accumulator + currentValue
//})
//In the above code, the reduce function works by taking the accumulator which in this instance is 3 and currentValue points to 5. This makes 8. So now 8 is the accumulator and 7 is the currentValue which makes 15. Then 15 is the accumulator and 9 is the currentValue, etc etc to the ending value of 35.

// total = arr.reduce((total, price) => {
//     return total + price
// })

//total comes to 111.97 which is correct.

//This can, of course be shortened further:

const total = arr.reduce((total, price) => total + price)

//you can do any mathematical operation here. But you can do more with reduce.

//minimum price:
//declaration of var holding the reduce function on arr. min here is the minimum price that will be compared to the value (currentPrice) that is being looked at to see if it is smaller than min or not
const minPrice = arr.reduce((min, currentPrice) => {
//This says if currentPrice (the number being looked at) is smaller than min, we return currentPrice out of the code. Or else we return min out of the code if currentPrice is LARGER than min
    if (currentPrice < min){
        return currentPrice;
    }
    return min;
})
//this code returns to console 1.5 which is the smallest price.