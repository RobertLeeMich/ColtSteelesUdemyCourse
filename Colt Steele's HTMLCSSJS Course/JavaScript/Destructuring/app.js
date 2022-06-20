//destructuring is a way to single out values from arrays or objects

const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//today I learned that array items can't begin with 0 or numbers in general in JS because JS views it as base 8 or 'oct' type numbers. thanks Sreject

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

//calling gold prints 10
//calling silver prints 9
//calling bronze prints 8
//calling everyoneElse prints 7,6,5 etc.