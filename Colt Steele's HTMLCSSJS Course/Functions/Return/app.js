function add (x,y) {
    sum = x+y;
    return sum;
}

//RETURN LETS THE OUTPUT OF A FUNCTION BE CAPTURED BY A VARIABLE FOR USE ELSEWHERE

//return keyword STOPS execution of function, anything after that will NOT run

function add2 (x,y){
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        return false;
    }
    let sum = x + y;
    return sum;
}

//typeof is something that hasn't been explained yet so I had to search the Q&A for it, but basically it always returns some fixed values, i.e. if we check typeof 5, it will return 'number' which is why x !== 'number' is here because the output of typeof would be 'number' if the output matches a number.