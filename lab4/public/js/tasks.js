// Task 1
function task1() {
    const task = {
        name: "Example Task",
        description: "This is an example task description",
        startDate: "2024-11-06",
        endDate: "2024-11-13"
    };
    console.log(task);
}

// Task 2
function task2() {
    const project = {
        projectName: "Project 1",
        type: "Type A",
        addTask: function() {
            console.log("Task added");
        },
        deleteTask: function() {
            console.log("Task deleted");
        },
        modifyTask: function() {
            console.log("Task modified");
        }
    };
    project.addTask();
    project.deleteTask();
    project.modifyTask();
}

// Task 3
function task3() {
    const task = { name: "Task", description: "Task description" };
    const project = { type: "Project", method: function() { console.log("Project method"); } };
    const mergedObject = { ...task, ...project };
    console.log(mergedObject);
}

// Task 4
function task4() {
    function Task(name, description) {
        this.name = name;
        this.description = description;
    }
    Task.prototype.showData = function() {
        console.log(`Name: ${this.name}, Description: ${this.description}`);
    };
    const newTask = new Task("Task 1", "Detailed task description");
    newTask.showData();
}

// Task 5
function task5() {
    function Task(name, description) {
        this.name = name;
        this.description = description;
    }
    Task.prototype.showData = function() {
        console.log(`Name: ${this.name}, Description: ${this.description}`);
    };

    function TaskInProgress(name, description, progress, isCompleted) {
        Task.call(this, name, description);
        this.progress = progress;
        this.isCompleted = isCompleted;
    }
    TaskInProgress.prototype = Object.create(Task.prototype);
    TaskInProgress.prototype.constructor = TaskInProgress;

    TaskInProgress.prototype.showData = function() {
        console.log(`Name: ${this.name}, Description: ${this.description}, Progress: ${this.progress}%, Completed: ${this.isCompleted}`);
    };

    const progressTask = new TaskInProgress("Task 2", "Description of task in progress", 50, false);
    progressTask.showData();
}

// Task 6
function task6() {
    class TaskClass {
        constructor(name, description) {
            this.name = name;
            this.description = description;
        }
        showData() {
            console.log(`Name: ${this.name}, Description: ${this.description}`);
        }
        get formattedDescription() {
            return this.description.toUpperCase();
        }
        set updateDescription(newDesc) {
            if (newDesc.length > 10) {
                this.description = newDesc;
            } else {
                console.log("Description must be longer than 10 characters.");
            }
        }
    }

    class TaskInProgressClass extends TaskClass {
        constructor(name, description, progress, isCompleted) {
            super(name, description);
            this.progress = progress;
            this.isCompleted = isCompleted;
        }
        showData() {
            console.log(`Name: ${this.name}, Description: ${this.description}, Progress: ${this.progress}%, Completed: ${this.isCompleted}`);
        }
    }

    const classTask = new TaskInProgressClass("Task 3", "Detailed class description", 75, false);
    classTask.showData();
}
