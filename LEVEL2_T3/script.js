document.addEventListener("DOMContentLoaded", function () {
    const pendingTasksList = document.getElementById("pending-tasks");
    const completedTasksList = document.getElementById("completed-tasks");
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");


    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        const taskTextElement = document.createElement("span");
        taskTextElement.innerText = taskText;
        taskTextElement.classList.add("task-text");

        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.classList.add("complete-button");
        completeButton.addEventListener("click", completeTask);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", deleteTask);

        listItem.appendChild(taskTextElement);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        pendingTasksList.appendChild(listItem);
        taskInput.value = "";
    }


    function completeTask() {
        const listItem = this.parentNode;
        const taskTextElement = listItem.querySelector(".task-text");
        taskTextElement.classList.toggle("completed");

        const completeButton = listItem.querySelector(".complete-button");
        completeButton.innerText = "Undo";
        completeButton.removeEventListener("click", completeTask);
        completeButton.addEventListener("click", undoTask);

        completedTasksList.appendChild(listItem);
        pendingTasksList.removeChild(listItem);
    }

    function undoTask() {
        const listItem = this.parentNode;
        const taskTextElement = listItem.querySelector(".task-text");
        taskTextElement.classList.toggle("completed");

        const undoButton = listItem.querySelector(".complete-button");
        undoButton.innerText = "Complete";
        undoButton.removeEventListener("click", undoTask);
        undoButton.addEventListener("click", completeTask);

        pendingTasksList.appendChild(listItem);
        completedTasksList.removeChild(listItem);
    }

    // Delete a task
    function deleteTask() {
        const listItem = this.parentNode;
        const list = listItem.parentNode;
        list.removeChild(listItem);
    }

    // Event listeners
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
