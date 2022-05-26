const password = prompt("please enter a new password");

//Password must be 6+ characters
if (password.length >= 6){
    if (password.indexOf(' ') === 1) {
        console.log("Valid pass.")
    } else {
        console.log("Pass cannot contain spaces.")
    }
} else {
    console.log("pass too short pls re-enter")
}
//Password cannot include space

if (password.indexOf(' ') === 1) {
    console.log("Good job no space.")
} else {
    console.log("Pass cannot contain spaces.")
}
