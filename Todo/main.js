
let addBtn = document.getElementById("addBtn")
let taskInput = document.getElementById("addTask")
let saveData = null
let taskList = document.getElementById("taskList")
let tasksArea = document.getElementsByClassName("tasksArea")
let TaskID = 0
console.log('hello world')
console.log(saveData)

addBtn.addEventListener('click', ()=>{
    if(taskList.innerHTML.includes('<li>your tasks here..</li>' )){
        taskList.innerHTML = ''
    }
    saveData =  taskInput.value
    let newLi = document.createElement('li')
    let addValue = document.createTextNode(saveData)
    let createRmvBtn = document.createElement('button')
    createRmvBtn.innerText = 'Remove'
    createRmvBtn.classList.add('buttons')
    newLi.appendChild(addValue)
    taskList.appendChild(newLi)
    newLi.appendChild(createRmvBtn)    
    addTask.value = ''
    createRmvBtn.addEventListener('click', ()=>{
        newLi.remove()

    })
    TaskID += 1 
    localStorage.setItem(`TaskID ${TaskID}`,`${saveData}`)
})



taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});
console.log(localStorage);
