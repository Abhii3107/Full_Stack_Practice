//list-
//add-
//delete
//quit

let Todo = [];
let req = prompt("please enter your request - add, delete , list ,quit");
while (true) {
  if (req === "quit") {
    console.log("user quitted");
    break;
  } else if (req === "add") {
    let task = prompt("add your task");
    Todo.push(task);
    console.log("your task is added");
  } else if (req === "delete") {
    let deleted = prompt("enter task you want to deleted");
    let idx = Todo.indexOf(deleted);
    if (idx !== -1) {
      Todo.splice(idx, 1);
      console.log("task is deleted");
    } else {
      console.log("task not found");
    }
  } else if (req === "list") {
    for (let i = 0; i < Todo.length; i++) {
      console.log(`tasks are `, `${i} is ${Todo[i]}`);
    }
  } else {
    console.log("wrong request try again");
  }
    req = prompt("please enter your request - add, delete , list ,quit");
}
