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
 function validUserNames(arr) {
     userNames.filter(u => u.length < 10)
 }
// const validUserNames = (arr) => arr.filter(name.length < 9)
//function name declaration is actually the variable name. arr is a parameter declaration here even though it's not directly attached to validUserNames.
