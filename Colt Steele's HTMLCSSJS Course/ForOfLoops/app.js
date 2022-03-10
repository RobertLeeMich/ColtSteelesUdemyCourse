// const games = ["Elden Ring", "Lost Ark", "Deep Rock Galactic", "American Truck Sim"];


/*A normal for loop*/
/* for (let i = 0; i < games.length; i++) {
    console.log(` Game: ${games[i]}`)
} */

/* for (variable of iterable item) {
    statement
} */

// for (let item of games) {
//     console.log(item)
// }

/* another example */

// const seats = [
//     ["Seat1", "Seat2", "Seat3"],
//     ["Seat4", "Seat5", "Seat6"],
//     ["Seat7", "Seat8", "Seat9", "Seat10"]
// ]

/*
for (let i = 0; i < seats.length; i++){
    const row = seats[i];
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}*/

/* for (let row of seats){
    console.log(row); //This prints each row of seats as an array on its own
    for (let singularSeat of row) {
        console.log(`${singularSeat}`)
    } //This prints each seat on its own that is in the array
} */

// for (let char of "hello world") {
//     console.log(char)
//} 
//this prints each character in the string on its own in the console

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let item of numbers) {
    console.log(item * item);
}
//ezpz