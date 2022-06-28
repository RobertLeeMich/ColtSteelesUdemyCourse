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

const user2 = {
    email: "user2@gmail.com",
    password: "password",
    firstName: "User2",
    lastName: "Name2",
    born: 1999,
    bio: "Username2 is a username2",
    city: "Tulsa",
    state: "Oklahoma"
}

//const email = user.email;
//The above is the same as below.
// const {email, firstName, lastName, city, bio} = user;

//If we want to rename a property (ex: for use somewhere else but with a different name for example) we just do the below
// const { born: birthYear, died: deathYear } = user;

const {city, state, died = 2004} = user2;
//default/fallback values can be assigned via = 


