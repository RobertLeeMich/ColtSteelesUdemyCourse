let input = prompt("What would you like to do?");
const todos =[];
while (input !== "quit" && input !=="q") {
    if (input === "list"){
        for (item of todos){
            console.log(todos[i]);
        }
    }
    input = prompt("What would you like to do?");
}
console.log("OK QUIT");