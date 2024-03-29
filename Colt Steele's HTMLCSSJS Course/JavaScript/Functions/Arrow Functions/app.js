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
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) +1
// }

//implicit arrow functions
//replacing the brackets with parenthesis works with "returns" that return ONE value only, ONE EXPRESSION in body of function
const rollDie = () => (
    Math.floor(Math.random() * 6) +1
)

//this is the shortest implicit arrow function that can be done that is functional, generally. One line.
const add2 = (a, b) => a + b

const movies = [{
    title: "Movie1",
    score: 96
},
{
    title: "Movie2",
    score: 69 //huehue nice

},
{
    title: "Movie3",
    score: 42
}];

//normal function
// const newMovies = movies.map(function (movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

//arrow function in 1 line. It's a bit long for 1 line though
const newMovies = movies.map(movie =>  `${movie.title} - ${movie.score / 10}`)
