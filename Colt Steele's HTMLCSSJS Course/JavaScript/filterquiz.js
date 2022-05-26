const arr = ['mark', 'staceysmom1978', 'q294834920', 'carrie98', 'MoanaFan93']
//not correct code
// const users = userNames.filter(u => {
//     userNames.length < 10
// })
// //correct but isn't valid
// const users2 = userNames.filter(u =>
//     u.length < 10
// )
//code that works but isn't correct
//  function validUserNames(arr) {
//      userNames.filter(u => u.length < 10)
//  }
// const validUserNames = (arr) => arr.filter(name.length < 9)
//function name declaration is actually the variable name. arr is a parameter declaration here even though it's not directly attached to validUserNames.
//explanation of "correct code"
//declaration of function with arg of "usernames" to be used in the first layer of the function
function validUserNames(usernames){
//the line to return the information from the second return in the function which contains the .length information of the usernames that were checked
    return usernames.filter(function(username){
//code that checks for the input arg (array item) and checks the length of the item to see if it's less than 10 characters. This gets returned to the return above.
        return username.length < 10;
    })
}