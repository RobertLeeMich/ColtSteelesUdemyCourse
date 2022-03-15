/*Going to have a while loop
While the results are not equal to quit, just keep looping
storage of todos will be in an array */
let todos = []
let input = prompt("What would you like to do?")
window.setTimeout(function() {
        while (prompt !== "quit" || prompt !== "q"){
            if (input === "new"){
            let newInput = prompt("please add to the todo");
            todos.push(newInput);
            } else if (input === "list"){
               console.log(todos); 
            } else if (input === "delete"){
            const index = prompt("Ok, enter an index to delete:")
            todos.splice(index, 1);
            }
        break;
        }
    
}, 100);
