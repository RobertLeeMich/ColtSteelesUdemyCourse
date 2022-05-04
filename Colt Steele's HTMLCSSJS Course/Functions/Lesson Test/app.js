// define isSnakeEyes below
// function isSnakeEyes (num1, num2) {
//     if (num1 && num2 === 1){
//         console.log("Snake Eyes!")
//     } else {
//         console.log("Not Snake Eyes!")
//     }
// }

//The above is incorrect. Correct code would be directly referencing the vars and checking if each one is 1, which the num1 && num2 == 1 LOOKS like it should do.

function isSnakeEyes (num1, num2){
    if (num1 === 1 && num2 === 1){
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

//explanation forthcoming on why these are different from Sreject
//Explanation: if (num1 && num2 === 1) means "if num1 is truthy and num2 equals exactly 1 do the thing" because num1 isn't being directly compared to anything, the JS is just checking that it's a valid variable. So we have to tell JS to directly check if num1 IS 1.