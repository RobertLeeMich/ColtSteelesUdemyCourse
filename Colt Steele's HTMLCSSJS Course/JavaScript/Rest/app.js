//rest looks similar to spread but is different

//rest collects all remaining arguments into an array

// function sum(){
//     return arguments.reduce((total, el) => total + el) //this portion was not explained well and I'm just leaving it here for notes
// }
//doing this lets you analyze args in the output

function sum (...nums){
    console.log(nums)
}
//the (...) here is actually a rest, which will pull all associated numbers in the arguments into the argument from whatever the user puts in for args

