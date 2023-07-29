import Tasks from './TaskList.js';
import setTodos from './StoreinLs.js';
import fetchTodos from './FetchFromLs.js';

const addItems = (txt) => {
  const item = fetchTodos();

  if (!(txt === '')) {
    const objTask = new Tasks(txt, false, item.length + 1);

    setTodos(objTask);
  }
};

export default addItems;