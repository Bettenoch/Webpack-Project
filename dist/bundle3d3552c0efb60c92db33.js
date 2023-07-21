/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DisplayTask.js":
/*!************************************!*\
  !*** ./src/modules/DisplayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Algos)
/* harmony export */ });
/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.js */ "./src/modules/TaskList.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Algos = /*#__PURE__*/_createClass(function Algos() {
  _classCallCheck(this, Algos);
});
_defineProperty(Algos, "storeInLS", function (todo) {
  var task = JSON.stringify(todo);
  localStorage.setItem('taskList', task);
});
_defineProperty(Algos, "fetchFromLS", function () {
  var todoList;
  if (JSON.parse(localStorage.getItem('taskList')) === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem('taskList'));
  }
  return todoList;
});
_defineProperty(Algos, "assignIndex", function (tasks) {
  tasks.forEach(function (todo, i) {
    todo.index = i + 1;
  });
});
_defineProperty(Algos, "deleteTodo", function (index) {
  var todoList = Algos.fetchFromLS();
  var deletedTodo = todoList[index];
  todoList = todoList.filter(function (item) {
    return item !== deletedTodo;
  });
  Algos.assignIndex(todoList);
  Algos.storeInLS(todoList);
});
_defineProperty(Algos, "updateTask", function (descp, index) {
  var todoList = Algos.fetchFromLS();
  var taskUpdate = todoList[index];
  todoList.forEach(function (item) {
    if (item === taskUpdate) {
      item.description = descp;
    }
  });
  Algos.storeInLS(todoList);
  Algos.displayTodos();
});
_defineProperty(Algos, "addTask", function () {
  document.querySelectorAll('.deleteIcon').forEach(function (btn) {
    return btn.addEventListener('click', function (e) {
      e.preventDefault();
      var idx;
      if (btn.idx > 0) {
        idx = btn.idx - 1;
      } else {
        idx = 0;
      }
      Algos.deleteTodo(idx);
      Algos.displayTodos();
    });
  });
});
_defineProperty(Algos, "editTodo", function (idx) {
  var todoList = Algos.fetchFromLS();
  var editedTodo = todoList[idx];
  document.getElementById('task-input').style.display = 'none';
  var taskEdit = document.getElementById('edit-input');
  taskEdit.value = editedTodo.description;
  taskEdit.setAttribute('idx', idx);
  document.querySelector('.edit-Todo-Form').style.display = 'block';
  taskEdit.focus();
});
_defineProperty(Algos, "editTodoBtn", function () {
  document.querySelectorAll('.editIcon').forEach(function (btn) {
    return btn.addEventListener('click', function (e) {
      e.preventDefault();
      var idx;
      if (btn.idx > 0) {
        idx = btn.idx - 1;
      } else {
        idx = 0;
      }
      Algos.editTodo(idx);
    });
  });
});
_defineProperty(Algos, "editTodoClick", function () {
  document.querySelectorAll('.todoTask').forEach(function (todo) {
    return todo.addEventListener('dblclick', function (e) {
      e.preventDefault();
      var idx;
      if (todo.idx > 0) {
        idx = todo.idx - 1;
      } else {
        idx = 0;
      }
      Algos.editTodo(idx);
    });
  });
});
_defineProperty(Algos, "CreateTodo", function (_ref, currentStatus, iscompleted) {
  var description = _ref.description,
    index = _ref.index;
  var todo = document.createElement('li');
  todo.className = 'todo-item';
  todo.innerHTML = "\n        <article class=\"todo_content\">\n          <input type=\"checkbox\" id=\"".concat(index, "\" name=\"\" value=\"\" class=\"checkbox\" ").concat(currentStatus, ">\n           <h3 id=\"").concat(index, "\" class=\"todoTask ").concat(iscompleted, "\">").concat(description, "</h3> <i></i>\n        </article>\n        <article class=\"todo-icons\">\n          <button class=\"edit-btn\" id=\"").concat(index, "\"><box-icon name='edit'></box-icon></button>\n          <button class=\"trash-can\" id=\"").concat(index, "\"><box-icon type='solid' name='message-x'></box-icon></button>\n        </article>\n        ");
  return todo;
});
_defineProperty(Algos, "displayTodos", function () {
  var todoList = Algos.fetchFromLS();
  var todoCont = document.getElementById('todo-list-items');
  todoCont.innerHTML = '';
  todoList.forEach(function (item) {
    var currentStatus;
    var iscompleted;
    if (item.completed === true) {
      currentStatus = 'checked';
      iscompleted = 'completed';
    } else {
      currentStatus = '';
      iscompleted = '';
    }
    todoCont.append(Algos.createTodo(item, currentStatus, iscompleted));
  });
  Algos.addTask();
  Algos.editTodoBtn();
  Algos.editTodoClick();
  var event = new Event('updatedList');
  document.dispatchEvent(event);
});
_defineProperty(Algos, "addTodoItems", function (descp) {
  var todoList = Algos.fetchFromLS();
  var idx = todoList.length + 1;
  var newTask = new _TaskList_js__WEBPACK_IMPORTED_MODULE_0__["default"](descp, idx);
  todoList.push(newTask);
  Algos.storeInLS(todoList);
  Algos.displayTodos();
});


/***/ }),

/***/ "./src/modules/TaskList.js":
/*!*********************************!*\
  !*** ./src/modules/TaskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Tasks = /*#__PURE__*/_createClass(function Tasks(description, index) {
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  _classCallCheck(this, Tasks);
  this.description = description;
  this.completed = completed;
  this.index = index;
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  --business-glow: 0 0 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0 0 4px rgba(234, 64, 164, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
  text-decoration: none;
  list-style-type: none;
}

body {
  background: var(--light);
  color: var(--dark);
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
  width: 100vw;
}

.page-contents {
  background: white;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  width: 80%;
}

.header-tag {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  width: 100%;
}

.header-tag h1 {
  font-size: 2rem;
}

.form-container {
  display: flex;
}

.t-text {
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 2px;
  transition: 0.5s;
  width: 100%;
}

.form-input {
  background: #efeded;
  border-radius: 10px;
  border-top: 1px solid #efecec;
}

.task-input {
  width: 100%;
  display: flex;
  padding: 1rem 3rem;
  outline: none;
  border: none;
  font-style: italic;
}

.btn-holder {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

#addBtn {
  width: max-content;
  padding: 0.5rem;
  border-radius: 20px;
  outline: none;
  border: none;
  background: linear-gradient(45deg, rgb(193, 120, 120), rgb(88, 88, 109));
}

#addBtn:hover {
  box-shadow: inset 400px 0 0 0 #d80286;
  color: white;
}

.todo-list {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.todo-list h3 {
  border-bottom: 1px solid #efecec;
  border-top: 1px solid #efecec;
  padding-block: 0.5rem;
}

.list-items {
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid #efecec;
  padding-block: 0.5rem;
}

.todo-content {
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 0 3rem;
}

.todo-icons {
  padding-right: 3rem;
}

.todo-output {
  display: flex;
}

.todo-task {
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 1;
  padding-top: 0.4rem;
}

.clear-completed {
  display: flex;
  justify-content: center;
  padding: 1rem;
  outline: none;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  color: #313154;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,sCAAA;EACA,0EAAA;EACA,iDAAA;EACA,iDAAA;AAAF;;AAGA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,qCAAA;EACA,qBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,wBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;AAAF;;AAGA;EACE,iBAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AAAF;;AAGA;EACE,mBAAA;EACA,mBAAA;EACA,6BAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,yBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,wEAAA;AAAF;;AAGA;EACE,qCAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,gCAAA;EACA,6BAAA;EACA,qBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;EACA,gCAAA;EACA,qBAAA;AAAF;;AAGA;EACE,aAAA;EACA,OAAA;EACA,SAAA;EACA,eAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,OAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,gDAAA;EACA,gBAAA;EACA,cAAA;AAAF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --primary: #ea40a4;\r\n  --business: #3a82ee;\r\n  --personal: var(--primary);\r\n  --light: #eee;\r\n  --grey: #888;\r\n  --dark: #313154;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  --business-glow: 0 0 4px rgba(58, 130, 238, 0.75);\r\n  --personal-glow: 0 0 4px rgba(234, 64, 164, 0.75);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  background: var(--light);\r\n  color: var(--dark);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n  margin-top: 4rem;\r\n  width: 100vw;\r\n}\r\n\r\n.page-contents {\r\n  background: white;\r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.header-tag {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.header-tag h1 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n}\r\n\r\n.t-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 3rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  gap: 1rem;\r\n  border-radius: 2px;\r\n  transition: 0.5s;\r\n  width: 100%;\r\n}\r\n\r\n.form-input {\r\n  background: #efeded;\r\n  border-radius: 10px;\r\n  border-top: 1px solid #efecec;\r\n}\r\n\r\n.task-input {\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 1rem 3rem;\r\n  outline: none;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-holder {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n#addBtn {\r\n  width: max-content;\r\n  padding: 0.5rem;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background: linear-gradient(45deg, rgb(193, 120, 120), rgb(88, 88, 109));\r\n}\r\n\r\n#addBtn:hover {\r\n  box-shadow: inset 400px 0 0 0 #d80286;\r\n  color: white;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-list h3 {\r\n  border-bottom: 1px solid #efecec;\r\n  border-top: 1px solid #efecec;\r\n  padding-block: 0.5rem;\r\n}\r\n\r\n.list-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  border-bottom: 1px solid #efecec;\r\n  padding-block: 0.5rem;\r\n}\r\n\r\n.todo-content {\r\n  display: flex;\r\n  flex: 1;\r\n  gap: 1rem;\r\n  padding: 0 3rem;\r\n}\r\n\r\n.todo-icons {\r\n  padding-right: 3rem;\r\n}\r\n\r\n.todo-output {\r\n  display: flex;\r\n}\r\n\r\n.todo-task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: start;\r\n  flex: 1;\r\n  padding-top: 0.4rem;\r\n}\r\n\r\n.clear-completed {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  outline: none;\r\n  border: none;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-weight: 700;\r\n  color: #313154;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DisplayTask.js */ "./src/modules/DisplayTask.js");


var mainForm = document.getElementById('main-form');
var editForm = document.getElementById('edit-form');
var userInput = document.getElementById('task-input');
var editInput = document.getElementById('edit-input');
mainForm.addEventListener('submit', function (e) {
  e.preventDefault();
  _modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoItems(userInput.value);
  userInput.value = '';
});
editForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var id = Number(editInput.getAttribute('id'));
  _modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask(editInput.value, id);
  editInput.value = '';
  document.getElementById('task-input').style.display = 'block';
  editForm.style.display = 'none';
});
window.addEventListener('DOMContentLoaded', function () {
  _modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle3d3552c0efb60c92db33.js.map