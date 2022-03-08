let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter first guess."));

while( guess !== targetNum){
    if (guess > targetNum){
       guess =  prompt("Too high, enter new guess")
    }
    else {
        guess = prompt("Too low, enter new guess.")
    }
}