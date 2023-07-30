import 'boxicons';

const todos = (todo) => {
  const taskList = document.getElementById('todo-list-items');
  const parentContainer = document.createElement('div');
  parentContainer.classList.add('div-container');
  parentContainer.setAttribute('draggable', 'true');

  parentContainer.innerHTML += `
    <article class="items">
        <div class="task-content">
            <input type="checkbox" onclick="checkTask(this)" class="check" ${todo.completed ? 'checked' : ''}>
            <input type="text" value="${todo.description}" class="input ${todo.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)"  onblur="editTodo(this)">
        </div>
        <box-icon class="remove" name='message-rounded-x'></box-icon>
     
    </article>
    <hr>
    `;
  taskList.appendChild(parentContainer);
  return taskList;
};

export default todos;