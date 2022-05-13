const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1
        console.log("EGG");
    }
}

//had to look up help, turns out it was easier than my brain was making it out to be. Just directly reference this.eggcount to increment the count instead of using a loop since we're just trying to add 1 to each call and not a bunch all at once.