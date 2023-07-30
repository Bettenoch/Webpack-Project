import fetchTodos from './FetchFromLs.js';

function clearChecked() {
  const item = fetchTodos();
  const removeAll = item.filter((tod) => tod.completed === false);
  removeAll.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(removeAll));
}
export default clearChecked;