//lesson code example

function callTwice(func) {
    func()
    func()
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

//Returning Functions lesson in Higher Order Functions lesson

function makeMysteryFunc(){
    const rand = math.Random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, good function")
        }
    } else {
        return function() {
            console.log("Bad function wheewhoo")
        }
    }
}