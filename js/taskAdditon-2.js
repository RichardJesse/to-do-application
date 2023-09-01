let addTaskBtn = document.querySelector('.btn');
let taskInput = document.querySelector('.form-control')

function addTask( task){
    let ElementForTask = document.createElement('div');
    ElementForTask.classList.add('p-3 mb-2 bg-warning text-dark');

    let taskTextElement = document.createElement('span');
    taskTextElement.textContent = task;

    ElementForTask.appendChild(taskTextElement);

}
addTaskBtn.addEventListener('click',function(){
    let taskEntered = taskInput.value;
    if(taskEntered){
        addTask(taskEntered);
        taskInput.value = ' ';


    }
})

