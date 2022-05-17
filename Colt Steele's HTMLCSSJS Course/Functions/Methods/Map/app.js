//map: creates a new array with the results of calling a callback on every element in the array

const nums = [1,2,3,4,5,6,7,8,9,10]

//added a const so I could see the output in console without using console.log
//and he did it in the lesson anyway lol
const numberMap = nums.map (function(num){
    return num * 2;
})

