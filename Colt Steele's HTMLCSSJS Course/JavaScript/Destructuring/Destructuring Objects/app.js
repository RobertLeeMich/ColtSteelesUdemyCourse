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

//const email = user.email;
//The above is the same as below.
const {email, firstName, lastName, city, bio} = user;