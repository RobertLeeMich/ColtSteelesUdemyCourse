let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter first guess."));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum){
       guess =  prompt("Too high, enter new guess");
    }
    else {
        guess = prompt("Too low, enter new guess.");
    }
}

if (guess === "q"){
    console.log("Okay, quitting.")
}
else {
console.log("gg you win.")
console.log(`You got it! It took you ${attempts} guesses!`);
}