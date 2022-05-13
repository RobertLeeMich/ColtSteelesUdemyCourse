const cat = {
    name : 'Zeus Cat',
    color: 'Orange',
    breed: 'Maine Coon',
    meow () {
        console.log(`${this.name} says meow`);
    }
}

//inside of the object, the keyword .this refers to the object itself, in this case, cat