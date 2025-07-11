const taskInput = document.querySelector(".input-container input");
const addBtn = document.querySelector(".input-container button");
const taskConatiner = document.querySelector(".task-container");
const deleteBtn = document.getElementById("delete");
const deleteAll = document.querySelector(".deleteAll");

let taskArray = JSON.parse(localStorage.getItem("taskArray")) || [];

const showTasks = () => {
    taskConatiner.innerHTML = "";

    taskArray.forEach((task, i) => {
        taskConatiner.innerHTML += `<div class="task">
                   <div class="task-text">
                     <p>${i + 1}. ${task}</p>
                   </div>
                   <div class="task-btn">
                    <button onClick="deleteTask(${i})" id="delete">Delete</button>
                    <button id="edit" onClick="editTask(${i})">Edit</button>
                    <button id="status" onClick="status(this)">Incompleted</button>
                   </div>
                </div>`
    })

}


taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
})


addBtn.addEventListener("click", () => {
    if (taskInput.value !== "") {
        taskArray.push(taskInput.value);
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
        alert("Task added successfully");
        taskInput.value = "";
        showTasks()
    } else {
        alert("Please enter a task")
    }
})

const deleteTask = (ind) =>{
    taskArray.splice(ind,1);
      localStorage.setItem("taskArray", JSON.stringify(taskArray));
      showTasks();
    alert("Task deleted successfully");
}

const editTask = (ind) =>{
   taskInput.value = taskArray[(ind)];
    deleteTask(ind);
}

const status = (button) => {
    button.innerHTML = "Completed";
    button.style.backgroundColor = "#5CB338";
}




showTasks()

