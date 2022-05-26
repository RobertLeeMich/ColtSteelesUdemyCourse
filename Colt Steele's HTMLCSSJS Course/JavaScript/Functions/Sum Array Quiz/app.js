//creation of function
function sumArray(array) {
    //creation of total to hold sum of numbers from array
    let total = 0;
    //creation of for loop to loop through array
    for (let i = 0; i < array.length; i++)
    //assigning items in array to total
    {
        total += array[i]; 
    }
    //return total to outside of array
    return total;
}

//the total var can't be outside of the function on creation because we are assigning the variable a value inside the function and returning it outside the function. So we can use total OUTSIDE the function after the fact but we can't create it outside the function.