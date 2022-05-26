/*Going to have a while loop
While the results are not equal to quit, just keep looping
storage of todos will be in an array */
let input = prompt("What would you like to do?") //prompt the user for a response
let todos = ["cars", "trukks"] //array we are working with
while (input !== "quit" && input !== "q"){//while loop for the entire block of code to keep running while the user does NOT type in quit or q
    if (input === "new"){ //if user types in "new" into the prompt
        let newInput = prompt("please add to the todo"); //prompts the user for a new todo after typing in "new"
        todos.push(newInput); //adds the typed item into the array
        } else if (input === "list"){
            console.log(todos); //if user enters "list" it prints the entire array. A For/Of loop can also be used here as seen in todos2.js, but Colt didn't want to use either of these and I asked why in the course questions. Will upd with answer later
        } else if (input === "delete"){
            const index = parseInt(prompt("Ok, enter an index to delete:")); //triggers the below code to run and delete an item at a certain index in the array
        if (!Number.isNaN(index)) { //if the number IS A NUMBER...
            const deleted = todos.splice(index, 1); //delete the item at the index the user specified and JUST THE ONE ITEM
            console.log(`Ok, deleted ${deleted[0]}`); //logs to console the text letting the user know what was deleted
            } else {
            console.log ("Unknown Index, pls try again") //Error for user entering a letter or a non-existent index
            }
        }
            
        break; //I don't think I need this here but I'll leave it since it's working lol
}
    
