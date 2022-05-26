const cat = {
    name : 'Zeus Cat',
    color: 'Orange',
    breed: 'Maine Coon',
    meow() {
        console.log("This is:", this)
        console.log(`${this.name} says meow`);
    }
}

//inside of the object, the keyword .this refers to the object itself, in this case, cat

//But, the value of .this depends on the invocation context of the function it is used in

const meow2 = cat.meow;

//when we call the above line of code with meow2(), it just prints "says meow". 
//This is because .this in this call of meow2() references the TOP LEVEL OBJECT called "window" which is created on every new webpage. All of the functions we can natively use in js exist inside of the "window" object

