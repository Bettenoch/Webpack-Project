import { taskField } from './TaskList.js';
import 'boxicons';

class InputTasks {
  constructor() {
    this.tasks = [];
  }

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
      this.tasks.forEach((task, idx) => {
        const todo = document.createElement('li');
        todo.classList.add('todo-item');
        todo.id = idx;
        todo.innerHTML = `
                <article class="todo-content">
                    <input type="checkbox" id="task-${task.idx}" class="todo-output" name="task-${task.idx}" ${task.completed ? 'checked' : 'unchecked'}>
                    <p contenteditable="true" class="todo-task">${task.description}</p>
                </article>
                <article class="todo-icons">
                    <box-icon name='dots-vertical'></box-icon>
                </article>
            
            `;
        taskField.appendChild(todo);
      });
    }
}

export const newTasks = new InputTasks();

export const { addItems } = new InputTasks();