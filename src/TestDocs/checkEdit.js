import fetchTodos from '../modules/FetchFromLs.js';

let currentVal = null;

const testCurrVal = (e) => {
  currentVal = e;
};

const testEditVal = (e) => {
  const item = fetchTodos();
  const txt = e;
  if (!(txt === '')) {
    item.forEach((todo) => {
      if (todo.description === currentVal) {
        todo.description = txt;
      }
    });
  }

  localStorage.setItem('tasks', JSON.stringify(item));
};

export { testCurrVal, testEditVal };