/*Going to have a while loop
While the results are not equal to quit, just keep looping
storage of todos will be in an array */
let input = prompt("What would you like to do?")
let todos = ["cars", "trukks"]
while (input !== "quit" && input !== "q"){
    if (input === "new"){
        let newInput = prompt("please add to the todo");
        todos.push(newInput);
        } else if (input === "list"){
            console.log(todos); 
        } else if (input === "delete"){
        const index = parseInt( prompt("Ok, enter an index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
            } else {
            console.log ("Unknown Index, pls try again")
            }
        }
            
        break;
}
    
