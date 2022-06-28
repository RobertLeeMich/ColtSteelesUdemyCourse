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

function fullName(user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
}