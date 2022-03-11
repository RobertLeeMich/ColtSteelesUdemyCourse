// const gamescores = {
//     LostArk: 8,
//     EldenRing: 9,
//     MHR: 7,
//     Dyson: 6,
//     Hunt: 8,
//     Rock: 9,
//     Escape: 1,
//     Counter: 3
// }
//for...OF does not let you iterate over key/value pairs such as these
// for (let score of gamescores){
//     console.log(score);
// }

//for...IN however will let you iterate over these objects. This will only print the KEY
// for (let score in gamescores){
//      console.log(score);
//  }

//to print the value of the key:
// for (let score in gamescores){
//     console.log(`${score} scored ${gamescores[score]}`)
// }
//what is happening here is we are iterating over the object and getting the key/value pairs inside, then printing the key (score), then getting the value of the gamescore key with the [score] which is the value of each key.

//There is also a console command called Object.keys(pass in whatever variable is assigned to the object here) that will print the internals of the object (such as the key/value pairs here) as an array. IT PRINTS KEYS ONLY NOT VALUES IN KEY/VALUE PAIRS

//Object.values will retrieve the values of the key/value pairs and print them in an array as well. This DOES NOT PRINT THE KEYS

//Object.entries will give us a nested array of key/value pairs. THIS PRINTS BOTH THE KEYS AND THE VALUES

const gamescores = {
    LostArk: 8,
    EldenRing: 9,
    MHR: 7,
    Dyson: 6,
    Hunt: 8,
    Rock: 9,
    Escape: 1,
    Counter: 3
}

//sum up gamescores values
let totalScore = 0;
let scores = Object.values(gamescores)

for (let score of /*Object.values(gamescores)*/ scores){
    totalScore += score;
}//this will get the value from the pairs because we called Object.values and converted gamescores to an array. Notice we did not use for...IN, we used for...OF here and it works fine

//for the totalScore section, calling totalScore in the console gets us a total of 51 which is the total of all the numbers in the values of the key/value pairs

//length of object
//objects do not have a length so gamescores.length will not work.
console.log(totalScore); //totals the gamescores values
console.log(totalScore / scores.length); //finds average of gamescores values

//iterating over objects is nowhere near as common as iterating over arrays.