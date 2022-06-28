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