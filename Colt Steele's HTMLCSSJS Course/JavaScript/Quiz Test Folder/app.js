function allEvens(arr) {
    return arr.every(num => num % 2 === 0)
}

const exams = [ 90, 92, 94, 96, 75, 43, 20, 1, 10, 74]

exams.every(score => score >= 75)
//returns false

exams.some(score => score >= 75)
//true bc "some" of the items in the list are above 75, it just doesn't specify which

//the lesson uses the movies object array again but I'm gonna skip this. I get the point
