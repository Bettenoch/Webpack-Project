import Algos from './DisplayTask.js';

export default class ClearComplete {
    static isComplete = (id, currentStatus) => {
      const todoList = Algos.fetchFromLS();
      todoList[id].completed = currentStatus;
      Algos.storeInLS(todoList);
      Algos.displayTodos();
    }

    static checkComplete = () => {
      document.querySelectorAll('.checkbox').forEach((btn) => btn.addEventListener('change', () => {
        let id;
        let currentStatus;
        if (btn.id > 0) {
          id = btn.id - 1;
        } else {
          id = 0;
        }
        if (btn.checked === true) {
          currentStatus = true;
        } else if (btn.checked !== true) {
          currentStatus = false;
        }

        this.isComplete(id, currentStatus);
      }));
    };

    static clearCompleted = () => {
      let todoList = Algos.fetchFromLS();

      todoList = todoList.filter((item) => item.completed !== true);
      Algos.assignIndex(todoList);
      Algos.storeInLS(todoList);
      Algos.displayTodos();
    }
}