// let countLoop = 0;

// while (countLoop < 10){
//     console.log(countLoop);
//     countLoop++;
    
// }

// const SECRET = "BabySloth" //var declaration

// let guess = prompt("Enter code pls"); //prompt on screen

// while (guess !== SECRET){
//     guess = prompt("Enter the secret code...")
// } //loop that says while guess does not equal the secret string, prompt "enter the secret code..." each time the wrong string is entered.
// console.log("Secret get!") //after the secret code is entered, this logs to the console.

//Why does the console.log outside of the loop not print in the first place, but only after the prompt is entered?

//ebiggz says: the prompt completely stops code execution until the condition is met for the prompt. So the first prompt just asks for an input, it's not comparing anything to anything. Then the text in the prompt changes to "Enter the secret code..." because it is now in the while loop. But we need guess to store a value, so may as well put some text there too. Then while the while loop is going as long as the wrong info is entered it will keep looping until the correct phrase is entered.

// const secret1 = "BabySloth";
// const secret2 = "BabyTiger";
// const secret3 = "BabyOinkers";

// let guess2 = prompt("Enter the secret code");

// //while (guess2 !== secret1 || secret2 || secret3) //this doesn't work because ---> eBiggz says because after an OR, there has to be a conditional that can stand on its own. So if we took while(secret2), this doesn't make sense. So the below has to happen instead. The below is the shortest this code can get as well. LONGHAND!
// while (guess !== secret1 || guess !== secret2 || guess !== secret3){
//     guess2 = prompt("Enter the seekret code");
//     console.log("WRONG");
// }
// console.log("Secret get!")

// let peopleSay = prompt("Hai say stuff!")

// while (true) {
//     peopleSay = prompt(peopleSay);
//     if (peopleSay.toLowerCase() === "stop copying me") break;
// }

// console.log("ok");

for (let i = 0; i < 1000; i++){
    console.log(i);
    if (i === 100) break;
}
//break is not usually used in a situation where something is running a set number of times, but it can be used this way.