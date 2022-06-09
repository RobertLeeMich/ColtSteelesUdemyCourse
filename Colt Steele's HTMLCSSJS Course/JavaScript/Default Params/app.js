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
