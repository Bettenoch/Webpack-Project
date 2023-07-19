export default class Tasks {
    constructor(description, completed, index) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}
export const addItem = document.getElementById('addBtn');
export const clearTask = document.querySelector('.clear-completed');
export const userInput = document.getElementById('task-input');
export const taskField = document.getElementById('todo-list-items');