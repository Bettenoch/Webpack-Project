import ClearComplete from './DeleteCompleted.js';

describe('Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = '<article class="todo-tasks">'
     + '<li></li>'
     + '</article>';
    const elem = { description: 'Testing Todo', completed: false, index: 1 };
    window.localStorage.setItem('todoList', JSON.stringify([elem]));
  });

  test('Todo status to change to completed when clicked', () => {
    const id = 0;
    const currentStatus = true;
    // const subject = new ClearComplete();
    const checkComplete = jest.spyOn(ClearComplete, 'isComplete');
    ClearComplete.isComplete(id, currentStatus);

    expect(checkComplete).toHaveBeenCalledTimes(1);
    const outcome = JSON.parse(window.localStorage.getItem('todoList'))[id].completed;
    expect(outcome).toBe(true);
  });
});