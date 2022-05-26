const nums = [1,2,3,4,5,6,7,8,9,10]

//forEach prints each item in an array
//inline function declaration to print each item rather than declaring a print function and calling the function in the forEach arg

//modulo operator (divisible by x number w/o remainder) printed to console, so 2, 4, 6, etc.

// nums.forEach(function (el){
//     if (el % 2 === 0) {
// console.log(el)
//     }
// })


// nums.forEach(function(el){
//     console.log(el);
// })

// for (let el of nums) {
//     console.log(el);
// }

const movies = [
{
    title: "Movie1",
    score: 99
},
{
    title: "Movie2",
    score: 70
},
{
    title: "Movie3",
    score: 60
},
{
    title: "Movie4",
    score: 30
}
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})