let todo = [];
let req = prompt("Please enter you request");
//console.log(req);
while (true) {
  if (req == "quit") {
    console.log("Quitting app");
    break;
  }
  if (req == "list") {
    console.log("________");
    // for (task of todo) {
    //   console.log(task);
    // }
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("________");
  } else if (req == "add") {
    let task = prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt(
      "Enter the index number of the task that you want to delete:"
    );
    todo.splice(idx, "1");
    console.log("Task deleted!");
  }
  req = prompt("Please enter you request");
}
