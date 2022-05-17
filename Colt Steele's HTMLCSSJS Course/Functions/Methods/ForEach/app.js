const nums = [1,2,3,4,5,6,7,8,9,10]

//forEach prints each item in an array
//inline function declaration to print each item rather than declaring a print function and calling the function in the forEach arg



nums.forEach(function(el){
    console.log(el);
})

for (let el of nums) {
    console.log(el);
}