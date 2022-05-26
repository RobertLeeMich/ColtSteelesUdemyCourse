// //a setup of a simple timeout piece of code, runs one time. Waits 3 seconds to run the code
// setTimeout(() => {
//     console.log("Hellloooo")
// }, 3000)
//setInterval repeats whatever is in the function call
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
