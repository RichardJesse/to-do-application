let taskInput = document.querySelector('.task-input');
let addTaskIcon = document.querySelector('.add-task-icon');
var taskList = document.querySelector('.task-list');

function addTask(task){
    let ElementForTask = document.createElement('div');
    ElementForTask.classList.add('task');

  let taskTextElement = document.createElement('span');
  taskTextElement.textContent = task;

  ElementForTask.appendChild(taskTextElement);

  let editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  editBtn.addEventListener('click',function(){
    editPopup.classList.add('active');
    document.addEventListener('click', function (event){
        if(!editPopup.contains(event.target) && !editBtn.contains(event.target)){
            editPopup.classList.remove('active');
        }

    })
  });

  ElementForTask.appendChild(editBtn);
  taskList.appendChild(ElementForTask);


    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push (task);

    localStorage.setItem('tasks',JSON.stringify(tasks));


}

addTaskIcon.addEventListener('click', function (){
    let taskEntered = taskInput.value;
    if(taskEntered){
        addTask(taskEntered);
        taskInput.value = '';
    }
});


window.addEventListener('load',function (){
    let tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task)=>{
        addTask(task);
    })
});

const editPopup = document.querySelector('.edit-popup');
const editInput = document.querySelector('.edit-input');



const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.addEventListener('click', () => {
    editInput.value = taskText;
    
});
