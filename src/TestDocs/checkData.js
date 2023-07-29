import fetchTodos from '../modules/FetchFromLs.js';

const checkboxTest = (description, itsStatus) => {
  const item = fetchTodos();
  item.forEach((task) => {
    if (task.description === description) {
      task.completed = itsStatus;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(item));
};

export default checkboxTest;
