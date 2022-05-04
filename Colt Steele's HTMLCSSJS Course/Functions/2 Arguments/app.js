/*function greet(firstName, lastName){
    console.log(`Hello, ${firstName} ${lastName[0]}.`)
}
*/

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}
// copied the code from the lesson and had a brain fart, had to put args as in quotes or else js looks for variables and finds none. I'm retarded

function repeat(str, numTimes) {
    /*result starts as empty*/
    let result = "";
    /*we loop the number of times dictated in the argument */
    for (let i = 0; i < numTimes; i++)
    /*we assign the resulting string being looped to result and concatenate the looped strings together  */
    result += str;
    /*console.log the result */
    console.log(result);
}

