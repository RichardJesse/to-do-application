let taskInput = document.querySelector('.task-input');
let addTaskIcon = document.querySelector('.add-task-icon');
var taskList = document.querySelector('.task-list');
var saveButton = document.querySelector(' #edit-popup .save-button');
var editPopup = document.querySelector('#edit-popup')

function addTask(task) {
    let ElementForTask = document.createElement('div');
    ElementForTask.classList.add('task');

    let taskTextElement = document.createElement('span');
    taskTextElement.textContent = task;

    ElementForTask.appendChild(taskTextElement);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'button button-primary');
    editBtn.setAttribute('data-toggle', 'popup');
    editBtn.setAttribute('data-target', '#edit-popup')
    editBtn.textContent = 'Edit';


    editBtn.addEventListener('click', function () {

        let currentTaskText = this.parentElement.querySelector('span').textContent;

        document.querySelector('#edit-popup input').value = currentTaskText;


        editPopup.classList.add('active');



        saveButton.addEventListener('click', function () {
            let newTaskAdded = document.querySelector('#edit-popup input').value;

            let OldExistingTask = currentTaskText;

            UpdateTask(OldExistingTask, newTaskAdded);
            // Retrieve a reference to the task element that you want to update
            let taskElement = this.parentElement;

            // Update the text content of the task element
            taskElement.querySelector('span').textContent = newTaskAdded;


            editPopup.classList.remove('active');
        })


        document.addEventListener('click', function (event) {
            if (!editPopup.contains(event.target) && !editBtn.contains(event.target)) {
                editPopup.classList.remove('active');
            }
        })
    });

    ElementForTask.appendChild(editBtn);
    taskList.appendChild(ElementForTask);

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


addTaskIcon.addEventListener('click', function () {
    let taskEntered = taskInput.value;
    if (taskEntered) {
        addTask(taskEntered);
        taskInput.value = '';
    }
});




window.addEventListener('load', function () {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
        addTask(task);
    })
});

// function to update the tasks

function UpdateTask(OldTask, newTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    let indexOfTask = tasks.indexOf(OldTask);
    if (indexOfTask !== -1) {
        tasks[indexOfTask] = newTask;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));


}
