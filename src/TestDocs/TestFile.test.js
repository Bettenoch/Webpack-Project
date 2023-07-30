import 'jest-localstorage-mock';
import fetchTodos from '../modules/FetchFromLs.js';
import addItems from '../modules/DisplayTask.js';
import removeTodo from '../modules/DeleteTask.js';
import { currVal, editTask } from '../modules/editTask.js';
// import isChecked from '../modules/CheckTodo.js';
import clearChecked from '../modules/DeleteCompleted.js';
import checkboxTest from './checkData.js';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();

// Mock DOM elements

describe('test my functions', () => {
  test('should add a todo to the list', () => {
    addItems('Watch Lakers Game');
    const data = fetchTodos();
    expect(data.length).toBe(1);
  });

  test('Should change the todo', () => {
    currVal('Watch Detroit Game');
    editTask('Watch Lakers Game');
    const data = fetchTodos();
    expect(data[0].description).toBe('Watch Lakers Game');
  });

  test('should ensure that todo checkbox is checked', () => {
    const description = 'Todo description';
    const altStat = true;

    const task = { description, completed: false };
    localStorage.setItem('tasks', JSON.stringify([task]));

    checkboxTest(description, altStat);
    const data = JSON.parse(localStorage.getItem('tasks'));
    expect(data[0].completed).toBe(altStat);
    localStorageMock.clear();
  });
  test('should remove checked todo', () => {
    clearChecked();
    const data = fetchTodos();
    expect(data.length).toBe(0);
  });
  test('should remove an item in the list', () => {
    removeTodo();
    const data = fetchTodos();
    expect(data.length).toBe(0);
  });
});