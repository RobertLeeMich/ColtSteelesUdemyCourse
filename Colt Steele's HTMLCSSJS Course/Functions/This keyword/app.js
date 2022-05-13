const cat = {
    name : 'Zeus Cat',
    color: 'Orange',
    breed: 'Maine Coon',
    meow () {
        console.log(`${this.name} says meow`);
    }
}

//inside of the object, the keyword .this refers to the object itself, in this case, cat

//But, the value of .this depends on the invocation context of the function it is used in

const meow2 = cat.meow;

//when we call the above line of code with meow2(), it just prints "says meow". 