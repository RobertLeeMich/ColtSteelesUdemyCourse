//spready syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments (for function calls) or elements (for array literals) are expected or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

//ex:
const nums = [9, 3, 2, 8]
Math.max(nums); //NaN (This is anticipating separate arguments, each one being a number)
//use spread!
Math.max(...nums); //(He had the number 67 here and I don't know why)
//same as calling:
//Math.max(9, 3, 2, 8)
//The spread operator (...) inserts the variable as individual variables from the array.