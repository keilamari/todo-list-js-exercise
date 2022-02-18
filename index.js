function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "} been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "😨");


// // DRIVER CODE BELOW

task1.logState();
task1.markCompleted();
task1.logState();
