import fetchTodos from './FetchFromLs.js';

const setTodos = (todo) => {
  const listArr = fetchTodos();
  listArr.push(todo);

  localStorage.setItem('tasks', JSON.stringify(listArr));
};

export default setTodos;