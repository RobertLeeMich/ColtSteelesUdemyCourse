//map: creates a new array with the results of calling a callback on every element in the array

const nums = [1,2,3,4,5,6,7,8,9,10]

//added a const so I could see the output in console without using console.log
//and he did it in the lesson anyway lol
const numberMap = nums.map (function(num){
    return num * 2;
})

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

   const titles = movies.map(function(movie){
        return movie.title.toUpperCase();
    })