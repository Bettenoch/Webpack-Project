import Tasks, { userInput} from "./TaskList.js";
import { newTasks } from "./DisplayTask.js";

const addList = (e) => {
    const todo = new Tasks(userInput.value, false, newTasks.tasks.length + 1);
    if (userInput.value === '') {
        e.preventDefault();
    } else {
        userInput.value = '';
    }
    return todo;
};

export default addList;