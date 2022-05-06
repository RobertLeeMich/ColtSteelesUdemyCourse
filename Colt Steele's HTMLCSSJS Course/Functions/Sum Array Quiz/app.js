function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++)
    {
        total += array[i]; 
    }
    return total;
}

//the total var can't be outside of the function on creation because we are assigning the variable a value inside the function and returning it outside the function. So we can use total OUTSIDE the function after the fact but we can't create it outside the function.