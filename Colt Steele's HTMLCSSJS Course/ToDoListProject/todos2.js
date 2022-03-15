let input = prompt("What would you like to do?");
const todos =["Cars", "Trukks"];
while (input !== "quit" && input !=="q") {
    if (input === "list"){
        for (item of todos){
            console.log(item);
        }
    } else if (input === "new"){
        const newTodo = prompt("Ok, what is the new todo?")
        todos.push(newTodo);
        console.log(`${newTodo} added to list.`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter the index to delete"))
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else console.log("Unknown Index")
    }
    input = prompt("What would you like to do?");
}
console.log("OK QUIT");