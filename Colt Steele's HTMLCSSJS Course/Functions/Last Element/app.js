function lastElement (arg){
    if (arg.length) {
        return arg[arg.length - 1];
    } else {
    return null;
    }
}

//the order in which things are returned does actually matter. I had the arg[arg.length - 1] underneath the return null that was at the top of the function code.