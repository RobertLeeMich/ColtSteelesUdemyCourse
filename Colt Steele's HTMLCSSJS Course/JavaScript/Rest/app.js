//rest looks similar to spread but is different

function sum(){
    console.log(arguments)
    return arguments.reduce((total, el) => total + el)
}
//doing this lets you analyze args in the output

