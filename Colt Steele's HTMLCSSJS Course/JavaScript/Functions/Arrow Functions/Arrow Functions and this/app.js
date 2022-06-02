const person = {
    firstName: 'Bob',
    lastName: 'Mich',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    //running fullName in a console will return Robert Michaud
    //also remember to have the code actually run you have to put person.fullName() with parenthesis. 
}

