import { taskField } from "./TaskList.js";
import 'boxicons'

class inputTasks {
    constructor() {
        this.tasks = []
    };

    initialize = () => {
        taskField.innerHTML = '';
    };

    addItems = (task) => {
        this.tasks.push(task);
        
    }
    updateTask = (descp, id) => {
        this.tasks[id].description = descp;
      };

    displayTask = () => {
        this.tasks.forEach ((task, idx) => {
            const todo = document.createElement('li');
            todo.classList.add('todo-item');
            todo.id = idx;
            todo.innerHTML = `
            <input type="checkbox" id="task-${task.idx}" name="task-${task.idx}" ${task.completed ? 'checked' : 'unchecked'}>
            <p contenteditable="true" class="todo-task">${task.description}</p>
            <box-icon name='dots-vertical-rounded class='more'></box-icon>
            <box-icon type='solid' name='comment-x' class='Delete'></box-icon>
            <box-icon type='solid' name='edit' class='edit'></box-icon>
            `
            taskField.appendChild(todo);
        });
    }
}

export const newTasks = new inputTasks();

export const { addItems} = new inputTasks();