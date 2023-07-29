const fetchTodos = () => {
  const todoos = JSON.parse(localStorage.getItem('tasks')) || [];
  return todoos;
};

export default fetchTodos;