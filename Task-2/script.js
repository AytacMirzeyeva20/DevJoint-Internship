let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let dragTask=null;
const todo=document.getElementById("todo-list");
const progress=document.getElementById("progress-list");
const done=document.getElementById("done-list");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const searchvalue=document.getElementById("search");
const filter = document.getElementById("filter-value");
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function renderTasks() {
todo.textContent="";
progress.textContent="";
done.textContent="";
const searchInput = searchvalue.value.toLowerCase();
const filterValue = filter.value;
searchvalue.addEventListener("input", () => {
    renderTasks();
});
tasks.forEach(task => {

        if (!task.title.toLowerCase().includes(searchInput)) {
            return;
        }
        if (filterValue !== "all" && task.status !== filterValue) {
    return;
}
const card = document.createElement("div");
card.className = "task";
card.draggable=true;
card.addEventListener("dragstart",()=>{
    dragTask=task;
})
const title = document.createElement("p");
title.textContent = task.title;
 const actions = document.createElement("div");
 actions.className = "task-actions";
 const editIcon = document.createElement("i");
 editIcon.className = "fa-regular fa-pen-to-square";
 const deleteIcon = document.createElement("i");
 deleteIcon.className = "fa-solid fa-trash-can";

 deleteIcon.addEventListener('click',()=>{
    tasks=tasks.filter(item => item.id !== task.id);
    saveTasks();
    renderTasks()
 })
 editIcon.addEventListener('click',()=>{
    const newName=prompt("Yeni tapsiriq adini daxil edin:", task.title);
      if (newName === null) {
        return;
    }

    if (newName.trim() === "") {
        alert("Tapsiriq adi bos ola bilməz.");
        return;
    }

    task.title = newName.trim();
    saveTasks();
    renderTasks();
 })

 actions.appendChild(editIcon);
 actions.appendChild(deleteIcon);
 card.appendChild(actions);
card.appendChild(title);


 if (task.status === "todo") {
            todo.appendChild(card);
        } else if (task.status === "progress") {
            progress.appendChild(card);
        } else if (task.status === "done") {
            done.appendChild(card);
        }

})
}
addButton.addEventListener('click',()=>{
const title=taskInput.value.trim();
if(title===""){
    alert("Metnin ici bosdur.")
    return;
}
 tasks.push({
        id: Date.now(),
        title: title,
        status: "todo"
    });

    taskInput.value = "";
  saveTasks();
    renderTasks();
})
renderTasks();
searchvalue.addEventListener("input", () => {
    renderTasks();
});
filter.addEventListener("change", () => {
    renderTasks();
});
todo.addEventListener("dragover", (e) => {
    e.preventDefault();
});

progress.addEventListener("dragover", (e) => {
    e.preventDefault();
});

done.addEventListener("dragover", (e) => {
    e.preventDefault();
});
todo.addEventListener("drop",(e)=>{
      if (!dragTask) return;
    dragTask.status = "todo";
    saveTasks();
    renderTasks();
})

progress.addEventListener("drop",(e)=>{
       if (!dragTask) return;
    dragTask.status = "progress";
    saveTasks();
    renderTasks();
})
done.addEventListener("drop",(e)=>{
       if (!dragTask) return;
    dragTask.status = "done";
    saveTasks();
    renderTasks();
})
