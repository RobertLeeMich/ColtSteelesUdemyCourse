// const test = function argg (arg){
//     console.log("ooooooh")
// }

// const test2 = (arg) => {
//     console.log("oooooh")
// }

// const add = function(x,y){
//     return x+y;
// }

const add = (x,y) => {
    return x + y;
}
//can write without parenthesis if you are only using 1 argument
const sq = x => {
    return x * x
}
//have to have empty parenthesis if no args
const rollDie = () => {
    return Math.floor(Math.random() * 6) +1
}