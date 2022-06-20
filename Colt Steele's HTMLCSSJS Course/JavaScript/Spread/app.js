//spread syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments (for function calls) or elements (for array literals) are expected or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

//spread with numbers in an array

//ex:
const nums = [9, 3, 2, 8]
Math.max(nums); //NaN (This is anticipating separate arguments, each one being a number)
//use spread!
Math.max(...nums); //(He had the number 67 here and I don't know why)
//same as calling:
//Math.max(9, 3, 2, 8)
//The spread operator (...) inserts the variable as individual variables from the array.

//spread with array literals

const cats = ['Cat1', 'Cat2', 'Cat3'];
const dogs = ['Dog1', 'Dog2', 'Dog3'];

const allPets = [...cats, ...dogs];

//objects with spread
const feline = {
    legs: 4,
    family: 'Felidae'
}
const canine = {
    isFurry: true,
    family: 'Caninae'
}

//new object with spread
const catDog = {
    ...feline, 
    ...canine
}
//If there is a property that is the same in 2 objects, the object that gets copied over last will overwrite the property so in this case, 'Caninae' would end up being the family in the catDog object.

//a real life example, perhaps

const dataFromForm = {
    email: 'bob@mail.com',
    password: 'tobfunke',
    username: 'tfunke'
}
//say we want to add another identifier to this like isAdmin and set it to true or false and an id number:

const newUser = {...dataFromForm, id: 3456, isAdmin: false};

//so now when a new user is added the id field is added to the user object as well as the isAdmin field.