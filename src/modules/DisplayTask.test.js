/** @jest-environment jsdom */
import Utility from './DisplayTask.js';

describe('Add todo item to the list', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
        <ul class="task_Items newClass">
            <li></li>
        </ul>
    `;
  });
  test('Add a TODO item to the local storage list', () => {
    const dtt = {
      description: 'Eat Chicken',
      index: 1,
      completed: false,
    };
    Utility.addTodoItems(dtt.description);
    const answer = Utility.fetchFromLS();

    expect(answer.length).toBe(1);
    // eslint-disable-next-line no-underscore-dangle
    expect(localStorage.__STORE__.todoList).toBe(JSON.stringify([dtt]));
  });
});