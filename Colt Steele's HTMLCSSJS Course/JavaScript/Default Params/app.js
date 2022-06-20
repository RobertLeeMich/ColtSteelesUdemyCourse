function rollDie(numSides){
    return Math.floor(Math.random() * numSides) +1
}

//default numSides to 6?
//if we don't pass in a number to the arg, we get NaN

function rollDie2(numSides){
    if (numSides === undefined){
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) +1
}

//above is the old way of doing default parameters which makes sense, if the number comes out to be NaN/undefined, then it's 6.

function rollDie3(numSides = 6){
    return Math.floor(Math.random() * numSides) +1
}

//this format is newer and makes it so the variable has a default assigned to it, if none is entered. Another format for this is as such:

function multiply(a, b = 5){
    return a * b
}

//it still requires an argument (a) but b is always 5 unless assigned a different number in the argument.

function greet (msg = 'Hey there', person) {
    return `${msg}, ${person}! `
}

//the order matters here.

