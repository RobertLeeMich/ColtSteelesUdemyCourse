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
//for...OF does not let you iterate over key/value pairs such as these
// for (let score of gamescores){
//     console.log(score);
// }

//for...IN however will let you iterate over these objects. This will only print the KEY
// for (let score in gamescores){
//      console.log(score);
//  }

//to print the value of the key:
for (let score in gamescores){
    console.log(`${score} scored ${gamescores[score]}`)
}
//what is happening here is we are iterating over the object and getting the key/value pairs inside, then printing the key (score), then getting the value of the gamescore key with the [score] which is the value of each key.