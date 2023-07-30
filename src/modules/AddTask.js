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
    
        <img class="remove" src="../assets/trashcan.png" alt="reload">
     
    </article>
    <hr>
    `;
  taskList.appendChild(parentContainer);
  return taskList;
};

export default todos;