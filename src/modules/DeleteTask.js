import fetchTodos from './FetchFromLs.js';

const removeTodo = (e) => {
  const item = fetchTodos();
  const deleteTodo = item.filter((tod) => tod.description !== e);
  deleteTodo.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTodo));
};

export default removeTodo;