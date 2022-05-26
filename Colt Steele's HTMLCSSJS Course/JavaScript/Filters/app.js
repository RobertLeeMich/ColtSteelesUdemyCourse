const numbers = [1,2,3,4,5,6,7,8,9]
//the only time anything happens in this code is when the code runs across '4' if we copy and paste this code in the console.
numbers.filter(n => {
    return n === 4
})

numbers.filter(w => {
    return w < 10
})

//useful if we're trying to filter highest rated things, etc

const movies = [{
    title: "Movie1",
    score: 99,
    year: 1984
}, {
    title: "Movie2",
    score: 54,
    year: 2022
}, {
    title: "Movie3",
    score: 45,
    year: 2010
}, {
    title: "Movie4",
    score: 23,
    year: 1952
}, {
    title: "Movie5",
    score: 95,
    year: 1947
}, {
    title: "Movie6",
    score: 1,
    year: 1944
}, {
    title: "Movie7",
    score: 10,
    year: 1942
}, {
    title: "Movie8",
    score: 57,
    year: 1966
}, {
    title: "Movie9",
    score: 100,
    year: 1999
}, {
    title: "Movie10",
    score: 47,
    year: 1965
}, {
    title: "Movie11",
    score: 50,
    year: 1950
}, {
    title: "Movie12",
    score: 33,
    year: 1883
}, 
]

const goodMovies = movies.filter(movie => {
    return movie.score > 50
})

//smaller code from lesson
const goodMovies2 = movies.filter(m => m.score > 80)

//filter for titles
const goodTitles = goodMovies.map(m => m.title)