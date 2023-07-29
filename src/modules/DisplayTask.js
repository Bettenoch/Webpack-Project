import Tasks from './TaskList.js';
import 'boxicons';

export default class Algos {
  static storeInLS = (todo) => {
    const item = JSON.stringify(todo);
    localStorage.setItem('todoList', item);
  };

  static fetchFromLS = () => {
    let todoList;

    if (JSON.parse(localStorage.getItem('todoList')) === null) {
      todoList = [];
    } else {
      todoList = JSON.parse(localStorage.getItem('todoList'));
    }

    return todoList;
  };

  static assignIndex = (todoList) => {
    todoList.forEach((item, i) => {
      item.index = i + 1;
    });
  }

  static deleteTodo = (id) => {
    let todoList = this.fetchFromLS();
    const deletedTodo = todoList[id];

    todoList = todoList.filter((item) => item !== deletedTodo);

    this.assignIndex(todoList);
    this.storeInLS(todoList);
  };

  static updateTask = (descp, id) => {
    const todoList = this.fetchFromLS();
    const taskUpdate = todoList[id];

    todoList.forEach((item) => {
      if (item === taskUpdate) {
        item.description = descp;
      }
    });

    this.storeInLS(todoList);
    this.displayTodos();
  };

  static addTask = () => {
    document.querySelectorAll('.trash-can').forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      let id;
      if (btn.id > 0) {
        id = btn.id - 1;
      } else {
        id = 0;
      }
      this.deleteTodo(id);
      this.displayTodos();
    }));
  }

  static editTodo = (id) => {
    const todoList = this.fetchFromLS();
    const editedTodo = todoList[id];

    document.getElementById('main-form').style.display = 'none';
    const taskEdit = document.querySelector('.edit-input');
    taskEdit.value = editedTodo.description;
    taskEdit.setAttribute('id', id);
    document.querySelector('.edit-Todo-Form').style.display = 'block';
    taskEdit.focus();
  }

  static editTodoBtn = () => {
    document.querySelectorAll('.edit-Icon').forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      let id;
      if (btn.id > 0) {
        id = btn.id - 1;
      } else {
        id = 0;
      }
      this.editTodo(id);
    }));
  }

  static editTodoClick = () => {
    document.querySelectorAll('.item').forEach((todo) => todo.addEventListener('dblclick', (e) => {
      e.preventDefault();
      let id;
      if (todo.id > 0) {
        id = todo.id - 1;
      } else {
        id = 0;
      }
      this.editTodo(id);
    }));
  }

  static CreateTodo = ({ description, index }, currentStatus, iscompleted) => {
    const todo = document.createElement('li');
    todo.className = 'todo-item';
    todo.innerHTML = `
        <article class="task-content">
          <input type="checkbox" id="${index}" name="" value="" class="checkbox" ${currentStatus}>
          <h3 id="${index}" class="item ${iscompleted}">${description}</h3>
        </article>
        <article class="todo-icons">
          <button class="edit-Icon" id="${index}"><box-icon name='edit' class='delete-btn'></box-icon></button>
          <button class="trash-can" id="${index}"><box-icon type='solid' name='message-x' class='edit-btn'></box-icon></button>
        </article>
        `;

    return todo;
  }

  static displayTodos = () => {
    const todoList = this.fetchFromLS();
    document.getElementById('todo-list-items').innerHTML = '';
    todoList.forEach((item) => {
      let currentStatus;
      let iscompleted;
      if (item.completed === true) {
        currentStatus = 'checked';
        iscompleted = 'completed';
      } else {
        currentStatus = '';
        iscompleted = '';
      }
      document.getElementById('todo-list-items').append(this.CreateTodo(item, currentStatus, iscompleted));
    });
    this.addTask();
    this.editTodoBtn();
    this.editTodoClick();

    const event = new Event('listUpdated');
    document.dispatchEvent(event);
  }

  static addTodoItems = (description) => {
    const todoList = this.fetchFromLS();
    const index = todoList.length + 1;
    const newTask = new Tasks(description, index);

    todoList.push(newTask);
    this.storeInLS(todoList);
    this.displayTodos();
  }
}