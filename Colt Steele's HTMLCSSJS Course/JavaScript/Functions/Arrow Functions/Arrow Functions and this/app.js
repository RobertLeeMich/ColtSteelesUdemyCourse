const person = {
    firstName: 'Bob',
    lastName: 'Mich',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    //running fullName in a console will return Robert Michaud
    //also remember to have the code actually run you have to put person.fullName() with parenthesis. 
    //if you replace the above with arrow notation, the 'this' in the code references the window instead of the object.
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
    //the above code is a function in a function that references the .fullName reference after 3 seconds. If the fullName key has an arrow function in it though, the console will print "undefined undefined" because it would be pointing to the window object.
}

