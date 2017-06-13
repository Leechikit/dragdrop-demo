/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//127.0.0.1:3000/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	var _dragdrop = __webpack_require__(6);

	var _dragdrop2 = _interopRequireDefault(_dragdrop);

	var _dragdropFiles = __webpack_require__(7);

	var _dragdropFiles2 = _interopRequireDefault(_dragdropFiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dragdrop2.default.init();
	_dragdropFiles2.default.init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = "module.exports = __webpack_public_path__ + \"html/index.html\";";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * @name: dragdrop
	 * @description: 拖拽模块
	 * @author: lizijie
	 * @update: 
	 */

	// 拖拽列表
	var dragListEl = document.querySelector('.drag-list');
	// 垃圾箱
	var dropListEl = document.querySelector('.drop-list');
	// 拖拽元素
	var dragEl = void 0;

	/**
	 * 初始化
	 *
	 */
	function init() {
		eventBind();
	}

	/**
	 * 事件绑定
	 *
	 */
	function eventBind() {
		dragstartEvent();
		dragEvent();
		dragendEvent();
		dragenterEvent();
		dragoverEvent();
		dragleaveEvent();
		dropEvent();
	}

	/**
	 * dragstart
	 *
	 */
	function dragstartEvent() {
		dragListEl.addEventListener("dragstart", function (event) {
			/*setDragImage start*/
			var img = document.createElement('img');
			img.src = "../image/draging.png";
			event.dataTransfer.setDragImage(img, 100, 20);
			/*setDragImage end*/

			var dataList = event.dataTransfer.items;
			console.log(event.dataTransfer);
			dataList.add(event.target.getAttribute('data-drag'), "text/plain");
			console.log("dragstart");
		});
	}

	/**
	 * drag
	 *
	 */
	function dragEvent() {
		dragListEl.addEventListener("drag", function (event) {
			//console.log("drag");
		});
	}

	/**
	 * dragend
	 *
	 */
	function dragendEvent() {
		dragListEl.addEventListener("dragend", function (event) {
			var dataList = event.dataTransfer.items;
			dataList.clear();
			console.log("dragend");
		});
	}

	/**
	 * dragenter
	 *
	 */
	function dragenterEvent() {
		dropListEl.addEventListener("dragenter", function (event) {
			console.log("dragenter");
		});
	}

	/**
	 * dragover
	 *
	 */
	function dragoverEvent() {
		dropListEl.addEventListener("dragover", function (event) {
			event.preventDefault();
			console.log("dragover");
		});
	}

	/**
	 * dragleave
	 *
	 */
	function dragleaveEvent() {
		dropListEl.addEventListener("dragleave", function (event) {
			console.log("dragleave");
		});
	}

	/**
	 * drop
	 *
	 */
	function dropEvent() {
		dropListEl.addEventListener("drop", function (event) {
			var dataList = event.dataTransfer.items;
			for (var i = 0, len = dataList.length; i < len; i++) {
				if (dataList[i].kind == "string" && dataList[i].type.match("^text/plain")) {
					dataList[i].getAsString(function (index) {
						var elem = document.querySelector('[data-drag="' + index + '"]');
						dropListEl.appendChild(elem);
					});
				}
			}

			console.log("drop");
		});
	}

	exports.default = {
		init: init
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * @name: dragdropFiles
	 * @description: 拖放文件
	 * @author: lizijie
	 * @update: 
	 */

	var filesZoneEl = document.querySelector('.drop-files-zone');
	var filesListEl = document.querySelector('.files-list');
	var filesList = [];

	/**
	 * init
	 *
	 */
	function init() {
		dragenterEvent();
		dragoverEvent();
		dragleaveEvent();
		dropEvent();
	}

	/**
	 * dragenter event handle
	 *
	 */
	function dragenterEvent() {
		filesZoneEl.addEventListener("dragenter", function (event) {
			filesZoneEl.style.opacity = 0.5;
		});
	}

	/**
	 * dragover event handle
	 *
	 */
	function dragoverEvent() {
		filesZoneEl.addEventListener("dragover", function (event) {
			event.preventDefault();
		});
	}

	/**
	 * dragleave event handle
	 *
	 */
	function dragleaveEvent() {
		filesZoneEl.addEventListener("dragleave", function (event) {
			filesZoneEl.style.opacity = 1;
		});
	}

	/**
	 * drop event handle
	 *
	 */
	function dropEvent() {
		filesZoneEl.addEventListener("drop", function (event) {
			event.preventDefault();
			var files = event.dataTransfer.files;
			filesZoneEl.style.opacity = 1;
			for (var i = 0, len = files.length; i < len; i++) {
				var liEl = document.createElement("li");
				liEl.innerHTML = files[i].name;
				filesList.push(files[i]);
				filesListEl.appendChild(liEl);
			}
			var items = event.dataTransfer.items;
			for (var _i = 0, _len = items.length; _i < _len; _i++) {
				console.log(items[_i].getAsFile());
			}
		});
	}

	exports.default = {
		init: init
	};

/***/ })
/******/ ]);