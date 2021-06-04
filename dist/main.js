/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOM = (function () {\n  const taskAdd = find(\".add-task-button\");\n  const projectAdd = find(\".add-project-button\");\n  const taskInterface = find(\".task-add\");\n  const projectInterface = find(\".add-project\");\n  const taskDeleteInterface = find(\".task-delete\");\n  const projectDeleteInterface = find(\".project-delete\");\n  const taskBar = find(\".tasks\");\n  const projectBar = find(\".projects\");\n  const projectAccept = find(\".project-accept\");\n  const projectInput = find(\"#project-name\");\n  const projectCancel = find(\".project-cancel\");\n  const projectDeleteAccept = find(\".project-delete-accept\");\n  const projectDeleteCancel = find(\".project-delete-cancel\");\n  const markCompleteAccept = find(\".mark-complete\");\n  const markCompleteCancel = find(\".mark-complete-cancel\");\n  const taskAccept = find(\".task-accept\");\n  const taskCancel = find(\".task-cancel\");\n  const taskInputName = find(\"#task-name\");\n  const taskInputDate = find(\"#task-date\");\n  const taskInputPriority = find(\"#task-priority\");\n  const taskInputDescription = find(\"#task-para\");\n\n  function find(f) {\n    return document.querySelector(f);\n  }\n  return {\n    taskAdd,\n    projectAdd,\n    taskDeleteInterface,\n    taskInterface,\n    projectDeleteInterface,\n    projectInterface,\n    taskBar,\n    projectBar,\n    projectAccept,\n    projectInput,\n    projectCancel,\n    projectDeleteAccept,\n    projectDeleteCancel,\n    markCompleteAccept,\n    markCompleteCancel,\n    taskAccept,\n    taskCancel,\n    taskInputDate,\n    taskInputName,\n    taskInputPriority,\n    taskInputDescription,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nconst UI = (function () {\n  function toggleHide(component) {\n    component.classList.toggle(\"hidden\");\n  }\n  function renderProjects() {\n    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectBar.innerHTML = \"\";\n    for (let p of _project_js__WEBPACK_IMPORTED_MODULE_1__.default.projects) {\n      const projectCell = document.createElement(\"div\");\n      projectCell.id = p.id;\n      projectCell.classList.add(\"project-cell\");\n      _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectBar.append(projectCell);\n      projectCell.addEventListener(\"click\", loadTasks);\n\n      const projectText = document.createElement(\"div\");\n      projectText.innerText = p.name;\n      projectCell.append(projectText);\n      projectText.classList.add(\"project-text\");\n\n      const projectDelete = document.createElement(\"div\");\n      projectCell.append(projectDelete);\n      projectDelete.innerText = \"D\";\n      projectDelete.classList.add(\"project-delete\");\n      projectDelete.addEventListener(\"click\", (e) => {\n        _project_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteProject(e.id);\n        renderProjects();\n      });\n    }\n  }\n\n  function loadTasks(event) {\n    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskBar.innerHTML=\"\";\n    let obj = _project_js__WEBPACK_IMPORTED_MODULE_1__.default.projects.find((project)=>{\n      return event.target.id==project.id;\n    })\n    for(let task of obj.tasks){\n      const taskCell = document.createElement(\"div\");\n      taskCell.classList.add(\"task-cell\");\n      _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskBar.append(taskCell);\n\n      const cellText = document.createElement(\"div\");\n      cellText.innerText = task;\n      taskCell.append(cellText);\n      cellText.classList.add(\"task-text\");\n\n      const taskDelete = document.createElement(\"div\");\n      taskCell.append(taskDelete);\n      taskDelete.innerText = \"Complete?\";\n      taskDelete.classList.add(\"task-delete\");\n      taskDelete.addEventListener(\"click\", (event) => {\n        //delete task code\n      });\n    }\n  }\n\n  return {\n    toggleHide,\n    renderProjects,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n\n\n(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\nfunction init() {\n  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskAdd.addEventListener(\"click\", (e) => {\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleHide(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskInterface);\n  });\n  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectAdd.addEventListener(\"click\", (e) => {\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleHide(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectInterface);\n  });\n  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectCancel.addEventListener(\"click\", (e) => {\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleHide(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectInterface);\n  });\n\n  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskCancel.addEventListener(\"click\", (e) => {\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleHide(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.taskInterface);\n  });\n\n  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectAccept.addEventListener(\"click\",(e)=>{\n      _project_js__WEBPACK_IMPORTED_MODULE_2__.default.addProject(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectInput.value);\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleHide(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectInterface);\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.renderProjects();\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://todo-list/./src/init.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet project = (function () {\n  const projects = [];\n  let id=0;\n  const projectFactory = function (name) {\n    const project = {};\n    project.name = name;\n    project.tasks = [];\n    project.id = id++;\n    return project;\n  };\n  const addProject = function (name) {\n    projects.push(projectFactory(name));\n  };\n  const deleteProject = function (id) {\n    const index = projects.findIndex((e) => {\n      e.id == id;\n    });\n    projects.splice(index, 1);\n  };\n\n  \n  return {addProject,deleteProject,projects};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;