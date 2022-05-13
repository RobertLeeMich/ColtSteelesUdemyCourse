//declare object
const hen = {
    //declare object property
    name: "Helen",
    //declare object property
    eggCount: 0,
    //declare function in object that changes value of another property
    layAnEgg() {
        //this here refers to "hen", .eggCount refers to property in object that is numberical
        this.eggCount += 1
        //logs to console
        return ("EGG");
    }
}

//had to look up help, turns out it was easier than my brain was making it out to be. Just directly reference this.eggcount to increment the count instead of using a loop since we're just trying to add 1 to each call and not a bunch all at once.

//RETURN IN DESCRIPTION MEANS RETURN!