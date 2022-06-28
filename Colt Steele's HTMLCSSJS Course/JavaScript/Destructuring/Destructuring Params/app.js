const user = {
    email: "user@gmail.com",
    password: "password",
    firstName: "User",
    lastName: "Name",
    born: 1977,
    died: 1978,
    bio: "Username is a username",
    city: "Los Angeles",
    state: "Utah"
}

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
//the above is much shorter, we don't have to bother using 'user' at all anywhere in it and it will still pull from the object.

const movies =  [
    {
        title: "Movie1",
        score: 99,
        year: 1994
    },
    {
        title: "Movie2",
        score: 69,
        year: 2005
    },
    {
        title: "Movie3",
        score: 89,
        year: 1972
    },
    {
        title: "Movie4",
        score: 96,
        year: 2010
    },
    {
        title: "Movie5",
        score: 05,
        year: 2030
    },
]

//filter based on score
// movies.filter((movie) => movie.score >= 90)
// movies.filter(({score})=> score >= 90)

//calling multiple items from the array

movies.map(movie => {
    return `${movie.title} ${movie.year} is rated ${movie.score}`
});
//shorten the above

movies.map(({title, score, year}) => {
    return `${title} ${year} is rated ${score}`
});
//instead of directly referencing movie.title etc we can just call on the individual key/value pairs since we're already referencing movies through the .map
