// class AppFunctions {
//   constructor(isTest = false) {
//     this.addTodo = document.getElementById('addBtn');
//     this.domItems = document.getElementById('todo-list-items');
//     this.todoItems = [];
//     this.islcStorage = 'application_config';
//     this.testMode = isTest;
//   }

//     activateApp = () => {
//       this.onTriggerList();
//       this.refreshDom();
//     }

//     addToList = (todoo) => {
//       this.todoItems.push({
//         index: (this.todoItems.length + 1), description: todoo, completed: false,
//       });
//       this.onStore();
//       this.refreshDom();
//     }

//     removeTodo = (idx) => {
//       const testList = [];
//       let count = 1;
//       this.todoItems.forEach((elem, i) => {
//         if (i !== idx) {
//           this.todoItems[i].index = count;
//           testList.push(this.todoItems[i]);
//           count += 1;
//         }
//       });
//       this.todoItems = testList;
//       this.onStore();
//       this.refreshDom();
//     }

//     editTodo = (id, text) => {
//       if (id < this.todoItems.length) {
//         this.todoItems[id].description = text;
//         this.onStore();
//       }

//       return this.todoItems[id].description;
//     }

//     checkTodo = (id, status) => {
//       if (id < this.todoItems.length) {
//         this.todoItems[id].completed = !status;
//         this.onStore();
//       }

//       return this.todoItems[id].completed;
//     }

//    clearComplete = () => {
//      const filterTodo = this.todoItems.filter((item) => {
//        const stat = item.completed === false;
//        return stat;
//      });
//      this.todoItems = filterTodo;
//      this.onStore();

//      return this.todoItems === filterTodo;
//    }

//   refreshDom = () => {
//     const refferer = this;
//     this.domItems.innerHTML = '';
//     this.todoItems.forEach((elem) => {
//       let completed = '';
//       if (elem.completed) {
//         completed = 'complete-todo';
//       }
//       refferer.domItems.innerHtml = `
//         ${refferer.domItems.innerHTML}
//         <article class="task-content">
//  <input type="checkbox" id="checkboxx" name="" value="" class="checkbox-${elem.index} box-check">
//             <h3 class="${completed} item" contentEditable="true" >${elem.description}</h3>
//         </article>
//         <article class="todo-icons">
//             <button class="edit-Icon">
//             <box-icon name='edit' class='delete-btn'></box-icon>
//             </button>
//             <button class="trash-can">
//             <box-icon type='solid' name='message-x' class='edit-btn'></box-icon>
//             </button>
//         </article>
//         `;
//     }, refferer);
//     this.todoItems.forEach((elem) => {
//       const checkItems = document.querySelector(`.checkbox-${elem.index}`);
//       checkItems.checked = false;
//       if (elem.completed) {
//         checkItems.checked = true;
//       }
//     });
//     if (this.testMode === false) {
//       this.eveTrigger();
//     }
//   };

//   eveTrigger = () => {
//     this.onEveTrigger();
//     this.onSubmitTrigger();
//     this.onChangeTrigger();
//   }

//   onEveTrigger = () => {
//     const btns = document.querySelectorAll('.trash-can');
//     const refferer = this;

//     btns.forEach((btn, index) => {
//       btn.addEventListener('click', (e) => {
//         const taskIdentifier = e.currentTarget;
//         taskIdentifier.refferer.removeTodo(taskIdentifier.index);
//       });
//       btn.index = index;
//       btn.refferer = refferer;
//     }, refferer);

//     const clicks = document.querySelectorAll('.box-check');
//     clicks.forEach((box, index) => {
//       box.addEventListener('click', (e) => {
//         const objRef = e.currentTarget;
//         this.checkTodo(objRef.index, objRef.refferer.todoItems[objRef.index].completed);
//         refferer.refreshDom();
//       });
//       box.index = index;
//       box.refferer = refferer;
//     }, refferer);

//     const removeBtns = document.getElementById('clear-complete');
//     removeBtns.addEventListener('click', () => {
//       this.clearComplete();
//       refferer.refreshDom();
//     });
//     removeBtns.refferer = this;
//   }

//   onSubmitTrigger = () => {
//     this.addTodo.addEventListener('keyup', (e) => {
//       if (e.keyCode !== 13) {
//         return;
//       }
//       const objRef = e.currentTarget;
//       const inputTask = objRef.refferer.addTodo.value;
//       if (!inputTask.replace(/\s/g, '').length || inputTask.length <= 0) {
//         return;
//       }
//       if (e.keyCode === 13) {
//         objRef.refferer.addToList(inputTask);
//         objRef.refferer.addTodo.value = '';
//       }
//       e.preventDefault();
//     });
//     this.addTodo.refferer = this;
//   }

//   onChangeTrigger = () => {
//     const refferer = this;
//     const descpItems = document.querySelectorAll('.item');
//     descpItems.forEach((descp, index) => {
//       descp.addEventListener('keyup', (e) => {
//         if (e.key !== 13) {
//           return;
//         }
//         const objRef = e.currentTarget;
//         let inputTask = objRef.value.innerHtml;
//         objRef.value.innerHtml = inputTask.replace('<br>', '');
//         inputTask = objRef.value.innerHTML;
//         if (!inputTask.replace(/\s/g, '').length || inputTask.length <= 0) {
//           return;
//         }

//         if (objRef.value.innerHTML !== objRef.refferer.todoList[objRef.index].description) {
//           objRef.value.innerHTML = inputTask.replace('<br>', '');
//           this.editTodo(objRef.index, objRef.value.innerHTML);
//           objRef.value.blur();
//         }
//       });
//       descp.addEventListener('focusout', (e) => {
//         const objRef = e.currentTarget;
//         if (objRef.value.innerHTML !== objRef.refferer.todoList[objRef.index].description) {
//           this.editTodo(objRef.index, objRef.value.innerHTML);
//         }
//       });
//       descp.index = index;
//       descp.refferer = refferer;
//       descp.value = descp;
//     }, refferer);
//   }

//   onStore = () => {
//     if (this.testMode === false) {
//       localStorage.setItem(this.islcStorage, JSON.stringify(this.todoItems));
//     }
//     return this.todoItems;
//   }

//   onTriggerList = () => {
//     if (this.testMode === false) {
//       if (localStorage.getItem(this.islcStorage) != null) {
//         this.todoItems = JSON.parse(localStorage.getItem(this.islcStorage));
//       }
//     }

//     return this.todoItems;
//   }
// }

// export default AppFunctions;