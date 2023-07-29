/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/AddTask.js":
/*!********************************!*\
  !*** ./src/modules/AddTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var todos = function todos(todo) {
  var taskList = document.getElementById('todo-list-items');
  var parentContainer = document.createElement('div');
  parentContainer.classList.add('div-container');
  parentContainer.setAttribute('draggable', 'true');
  parentContainer.innerHTML += "\n    <article class=\"items\">\n        <div class=\"task-content\">\n            <input type=\"checkbox\" onclick=\"checkTask(this)\" class=\"check\" ".concat(todo.completed ? 'checked' : '', ">\n            <input type=\"text\" value=\"").concat(todo.description, "\" class=\"input ").concat(todo.completed ? 'completed' : '', "\" onfocus=\"getCurrentTask(this)\"  onblur=\"editTodo(this)\">\n        </div>\n    \n        <img class=\"remove\" src=\"../assets/trashcan.png\" alt=\"reload\">\n     \n    </article>\n    <hr>\n    ");
  taskList.appendChild(parentContainer);
  return taskList;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);

/***/ }),

/***/ "./src/modules/CheckTodo.js":
/*!**********************************!*\
  !*** ./src/modules/CheckTodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");

function isChecked(e) {
  var item = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  item.forEach(function (task) {
    if (task.description === e.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  e.nextElementSibling.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(item));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isChecked);

/***/ }),

/***/ "./src/modules/DeleteCompleted.js":
/*!****************************************!*\
  !*** ./src/modules/DeleteCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");

function clearChecked() {
  var item = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var removeAll = item.filter(function (tod) {
    return tod.completed === false;
  });
  removeAll.forEach(function (task, index) {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(removeAll));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearChecked);

/***/ }),

/***/ "./src/modules/DeleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/DeleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");

var removeTodo = function removeTodo(e) {
  var item = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var deleteTodo = item.filter(function (tod) {
    return tod.description !== e;
  });
  deleteTodo.forEach(function (task, index) {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTodo));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);

/***/ }),

/***/ "./src/modules/DisplayTask.js":
/*!************************************!*\
  !*** ./src/modules/DisplayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.js */ "./src/modules/TaskList.js");
/* harmony import */ var _StoreinLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreinLs.js */ "./src/modules/StoreinLs.js");
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");



var addItems = function addItems(txt) {
  var item = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (!(txt === '')) {
    var objTask = new _TaskList_js__WEBPACK_IMPORTED_MODULE_0__["default"](txt, false, item.length + 1);
    (0,_StoreinLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objTask);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItems);

/***/ }),

/***/ "./src/modules/FetchFromLs.js":
/*!************************************!*\
  !*** ./src/modules/FetchFromLs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fetchTodos = function fetchTodos() {
  var todoos = JSON.parse(localStorage.getItem('tasks')) || [];
  return todoos;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTodos);

/***/ }),

/***/ "./src/modules/StoreinLs.js":
/*!**********************************!*\
  !*** ./src/modules/StoreinLs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");

var setTodos = function setTodos(todo) {
  var listArr = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  listArr.push(todo);
  localStorage.setItem('tasks', JSON.stringify(listArr));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTodos);

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
var Tasks = /*#__PURE__*/_createClass(function Tasks(description, completed, index) {
  _classCallCheck(this, Tasks);
  this.description = description;
  this.completed = completed;
  this.index = index;
});


/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currVal: () => (/* binding */ currVal),
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchFromLs.js */ "./src/modules/FetchFromLs.js");

var currentItem = null;
function currVal(e) {
  currentItem = e.value;
}
function editTask(e) {
  var item = (0,_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var txt = e.value;
  if (!(txt === '')) {
    item.forEach(function (task) {
      if (task.description === currentItem) {
        task.description = txt;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(item));
  }
}


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
  --linear-grad: linear-gradient(to right, #c6ffdd, #fbd786, #c02c31);
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

#edit-form {
  display: none;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 3rem;
}

#addBtn {
  width: max-content;
  padding: 0.5rem;
  border-radius: 20px;
  outline: none;
  border: none;
  background: linear-gradient(45deg, rgb(208, 52, 52), rgb(85, 85, 189));
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
  gap: 1rem;
  padding: 0 3rem;
}

.task-content {
  display: flex;
  padding: 0 3rem;
  gap: 1rem;
}

.remove {
  width: 20px;
  height: 20px;
}

.todo-icons {
  display: flex;
  gap: 0.5rem;
  padding-right: 3rem;
  outline: none;
  border: none;
}

.edit-Icon,
.trash-can {
  outline: none;
  border: none;
  background: none;
}

.trash-can {
  color: #4b1f38 !important;
}

.trash-can:hover {
  transform: scale(1.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;
}

.delete-btn {
  color: #4b1f38 !important;
  display: flex;
}

.delete-btn:hover {
  transform: scale(1.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;
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
  color: #3838c8;
}
.clear-completed:hover {
  cursor: pointer;
}

.hover-effect {
  position: relative;
  padding: 0.75em;
  color: var(--linear-grad);
}
.hover-effect::before, .hover-effect::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-origin: center;
}
.hover-effect::before {
  border-top: 0.2em solid var(--linear-grad);
  border-bottom: 0.2em solid var(--linear-grad);
  transform: scale3d(0, 1, 1);
}
.hover-effect::after {
  border-left: 0.2em solid var(--linear-grad);
  border-right: 0.2em solid var(--linear-grad);
  transform: scale3d(1, 0, 1);
}
.hover-effect:hover::before, .hover-effect:hover::after {
  transform: scale3d(1, 1, 1);
  transition: transform 900ms;
}

.completed {
  text-decoration: line-through;
  color: gray;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,sCAAA;EACA,0EAAA;EACA,iDAAA;EACA,iDAAA;EACA,mEAAA;AAAF;;AAGA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,qCAAA;EACA,qBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,wBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;AAAF;;AAGA;EACE,iBAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,mBAAA;EACA,mBAAA;EACA,6BAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,sEAAA;AAAF;;AAGA;EACE,qCAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,gCAAA;EACA,6BAAA;EACA,qBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;EACA,gCAAA;EACA,qBAAA;AAAF;;AAGA;EACE,aAAA;EACA,SAAA;EACA,eAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;AAAF;;AAIA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;AADF;;AAIA;;EAEE,aAAA;EACA,YAAA;EACA,gBAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,qBAAA;EACA,iDAAA;AADF;;AAIA;EACE,yBAAA;EACA,aAAA;AADF;;AAIA;EACE,qBAAA;EACA,iDAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,OAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,gDAAA;EACA,gBAAA;EACA,cAAA;AADF;AAGE;EACE,eAAA;AADJ;;AAKA;EACE,kBAAA;EACA,eAAA;EACA,yBAAA;AAFF;AAIE;EAEE,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;AAHJ;AAME;EACE,0CAAA;EACA,6CAAA;EACA,2BAAA;AAJJ;AAOE;EACE,2CAAA;EACA,4CAAA;EACA,2BAAA;AALJ;AAQE;EAEE,2BAAA;EACA,2BAAA;AAPJ;;AAWA;EACE,6BAAA;EACA,WAAA;AARF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --primary: #ea40a4;\r\n  --business: #3a82ee;\r\n  --personal: var(--primary);\r\n  --light: #eee;\r\n  --grey: #888;\r\n  --dark: #313154;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  --business-glow: 0 0 4px rgba(58, 130, 238, 0.75);\r\n  --personal-glow: 0 0 4px rgba(234, 64, 164, 0.75);\r\n  --linear-grad: linear-gradient(to right, #c6ffdd, #fbd786, #c02c31);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  background: var(--light);\r\n  color: var(--dark);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n  margin-top: 4rem;\r\n  width: 100vw;\r\n}\r\n\r\n.page-contents {\r\n  background: white;\r\n  box-shadow: var(--box-shadow);\r\n  border-radius: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.header-tag {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.header-tag h1 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n}\r\n\r\n.t-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 3rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  gap: 1rem;\r\n  border-radius: 2px;\r\n  transition: 0.5s;\r\n  width: 100%;\r\n}\r\n\r\n#edit-form {\r\n  display: none;\r\n}\r\n\r\n.form-input {\r\n  background: #efeded;\r\n  border-radius: 10px;\r\n  border-top: 1px solid #efecec;\r\n}\r\n\r\n.task-input {\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 1rem 3rem;\r\n  outline: none;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-holder {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  padding: 1rem 3rem;\r\n}\r\n\r\n#addBtn {\r\n  width: max-content;\r\n  padding: 0.5rem;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background: linear-gradient(45deg, rgb(208, 52, 52), rgb(85, 85, 189));\r\n}\r\n\r\n#addBtn:hover {\r\n  box-shadow: inset 400px 0 0 0 #d80286;\r\n  color: white;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-list h3 {\r\n  border-bottom: 1px solid #efecec;\r\n  border-top: 1px solid #efecec;\r\n  padding-block: 0.5rem;\r\n}\r\n\r\n.list-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  border-bottom: 1px solid #efecec;\r\n  padding-block: 0.5rem;\r\n}\r\n\r\n.todo-content {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0 3rem;\r\n}\r\n\r\n.task-content {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.remove {\r\n  width: 20px;\r\n  height: 20px;\r\n  // padding: 10px;\r\n}\r\n\r\n.todo-icons {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  padding-right: 3rem;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.edit-Icon,\r\n.trash-can {\r\n  outline: none;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.trash-can {\r\n  color: #4b1f38 !important;\r\n}\r\n\r\n.trash-can:hover {\r\n  transform: scale(1.2);\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n.delete-btn {\r\n  color: #4b1f38 !important;\r\n  display: flex;\r\n}\r\n\r\n.delete-btn:hover {\r\n  transform: scale(1.5);\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n.todo-output {\r\n  display: flex;\r\n}\r\n\r\n.todo-task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: start;\r\n  flex: 1;\r\n  padding-top: 0.4rem;\r\n}\r\n\r\n.clear-completed {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  outline: none;\r\n  border: none;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-weight: 700;\r\n  color: #3838c8;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.hover-effect {\r\n  position: relative;\r\n  padding: 0.75em;\r\n  color: var(--linear-grad);\r\n\r\n  &::before,\r\n  &::after {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    transform-origin: center;\r\n  }\r\n\r\n  &::before {\r\n    border-top: 0.2em solid var(--linear-grad);\r\n    border-bottom: 0.2em solid var(--linear-grad);\r\n    transform: scale3d(0, 1, 1);\r\n  }\r\n\r\n  &::after {\r\n    border-left: 0.2em solid var(--linear-grad);\r\n    border-right: 0.2em solid var(--linear-grad);\r\n    transform: scale3d(1, 0, 1);\r\n  }\r\n\r\n  &:hover::before,\r\n  &:hover::after {\r\n    transform: scale3d(1, 1, 1);\r\n    transition: transform 900ms;\r\n  }\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/FetchFromLs.js */ "./src/modules/FetchFromLs.js");
/* harmony import */ var _modules_AddTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AddTask.js */ "./src/modules/AddTask.js");
/* harmony import */ var _modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DisplayTask.js */ "./src/modules/DisplayTask.js");
/* harmony import */ var _modules_DeleteTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DeleteTask.js */ "./src/modules/DeleteTask.js");
/* harmony import */ var _modules_editTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editTask.js */ "./src/modules/editTask.js");
/* harmony import */ var _modules_CheckTodo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/CheckTodo.js */ "./src/modules/CheckTodo.js");
/* harmony import */ var _modules_DeleteCompleted_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/DeleteCompleted.js */ "./src/modules/DeleteCompleted.js");








var plus = document.getElementById('addBtn');
var removeAll = document.getElementById('clear-complete');
var todo = document.getElementById('task-input');
var refresh = document.getElementById('reload');
var tasks = document.getElementById('todo-list-items');
var item = (0,_modules_FetchFromLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
item.forEach(function (event) {
  (0,_modules_AddTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
});
refresh.addEventListener('click', function () {
  item.forEach(function (task) {
    task.completed = false;
  });
  localStorage.setItem('tasks', JSON.stringify(item));
  window.location.reload();
});
plus.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValue = todo.value;
  (0,_modules_DisplayTask_js__WEBPACK_IMPORTED_MODULE_3__["default"])(inputValue);
  todo.value = '';
});
window.getCurrentTask = function (e) {
  (0,_modules_editTask_js__WEBPACK_IMPORTED_MODULE_5__.currVal)(e);
};
window.editTodo = function (e) {
  (0,_modules_editTask_js__WEBPACK_IMPORTED_MODULE_5__.editTask)(e);
};
window.checkTask = function (e) {
  (0,_modules_CheckTodo_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e);
};
var removeTaskInArr = function removeTaskInArr(target) {
  if (target.classList.contains('remove')) {
    (0,_modules_DeleteTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(target.parentNode.firstElementChild.lastElementChild.value);
    target.parentNode.parentNode.remove();
  }
};
var manageTask = function manageTask(item) {
  removeTaskInArr(item.target);
};
tasks.addEventListener('click', manageTask);
removeAll.addEventListener('click', function () {
  (0,_modules_DeleteCompleted_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  window.location.reload();
});
})();

/******/ })()
;
//# sourceMappingURL=bundlef5b9e6774c2968407af9.js.map