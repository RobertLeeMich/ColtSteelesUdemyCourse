//try catch is to catch errors so they don't absolutely decimate the running of code. If we think something will result in an error, wrap it in a try/catch.

// try {
//     hello.toUpperCase
// } catch {
//     console.log("error")
// }

// console.log("after")

//the above right off the bat shows the console.log in the chrome console before trying to run any code

//the console.log below it will still run even though the hello.toUpperCase still errors out

//using try/catch is important in AJAX etc. 
try {
function yell(msg){
    console.log(msg.toUpperCase().repeat(3));
}
} catch {
    console.log("error")
}

//when calling strings, use "" around the arg!!!!

