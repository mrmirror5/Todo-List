const inputBox = document.getElementById("input-box");
const taskBucket = document.getElementById("task-bucket");

//Make Add button addTask
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

//Make enter addTask
document.getElementById("input-box").addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        addTask()
    }
})



function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        const taskBody = document.createElement("div");
        taskBody.classList.add("task-body");

        taskBody.innerHTML = `
            <div class="task">
                <p>${inputBox.value}</p>
            </div>
            <div class="basic-button rm-button">
                Remove
            </div>    
        `;
        //Event listener for removing task
        const removeButton = taskBody.querySelector(".rm-button");
        removeButton.addEventListener("click", function(){
            taskBody.remove();
        });
        inputBox.value = ""
        taskBucket.appendChild(taskBody);
    }
}



