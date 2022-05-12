//lesson code example

function callTwice(func) {
    func()
    func()
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

//Returning Functions lesson in Higher Order Functions lesson

function makeMysteryFunc(){
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, good function")
        }
    } else {
        return function() {
            console.log("Bad function wheewhoo")
        }
    }
}

//We can assign the entire above block of code to a variable by putting const mystery = makeMysteryFunc() in the console and assigning the function to the variable. Or just do it in the code too.

function makeBetweenFunc(min,max) {
    return function (num){
        return num >= min && num <= max
    }
}

/* The example for using the above code goes like this:

Assigning a the whole function to a variable, so we can do const isChild = makeBetweenFunc(0, 18) which when we call isChild(40) will return false and isChild(5) will return true. Then we can assign the same function to another variable called isAdult (const isAdult) and assign the "factory" to it again with the limits of 19 - 100 as an example (const isAdult = makeBetweenFunc(19, 100)). Then we can call isAdult(40) which would return true and isAdult(5) which is false.

*/


//the below function returns false for under 50 but true for over 50
// function isBetween(){
//     return num >= 50 && num <= 100
// } 