const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const deleteButton = document.getElementById("delete-tasks-btn");

saveButton.addEventListener('click', function() {
    let newTask = document.getElementById("new-task").value;
    let taskList = document.getElementById("tasks");

    if(newTask != "") {
        document.getElementById("list-container").style.visibility = "visible";

        taskList.innerHTML += "<li>" + newTask + "<input class='done-btn'   type='button' value='Done'/></li>";
        document.getElementById("new-task").value = "";
    } else {
        alert("Task must be entered before saving");
    }
});

clearButton.addEventListener('click', function() {
    document.getElementById("new-task").value = "";
});

deleteButton.addEventListener('click', function() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("list-container").style.visibility = "hidden";
}); 