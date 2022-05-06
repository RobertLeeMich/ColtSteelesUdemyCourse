function lastElement (arg){
    /* if the arg has a length*/if (arg.length) {   
 /*return arg.length - 1 which returns the last item in the array, if there is an array */       return arg[arg.length - 1];
    } else {
    /*Return null if the array doesn't have a length*/
    return null;
    }
}

//the order in which things are returned does actually matter. I had the arg[arg.length - 1] underneath the return null that was at the top of the function code.

//3rd try + a lookup