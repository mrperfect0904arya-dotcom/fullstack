let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let taskCount = document.getElementById("taskCount");

let count = 0;

// Add Task
function addTask() {

    let taskText = taskInput.value.trim();

    // Validate Empty Input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Create span for text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Mark complete
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
        count--;
        updateCount();
    };

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    count++;
    updateCount();

    // Clear input
    taskInput.value = "";
}

// Update Task Count
function updateCount() {
    taskCount.textContent = "Total Tasks: " + count;
}