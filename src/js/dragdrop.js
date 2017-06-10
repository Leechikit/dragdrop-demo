/**
 * @name: dragdrop
 * @description: 拖拽模块
 * @author: lizijie
 * @update: 
 */

// 拖拽列表
const dragListEl = document.querySelector('.drag-list');
// 垃圾箱
const dropListEl = document.querySelector('.drop-list');
// 拖拽元素
let dragEl;

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
	dragListEl.addEventListener("dragstart", (event) => {
		dragEl = event.target;
		console.log("dragstart");
	});
}

/**
 * drag
 *
 */
function dragEvent() {
	dragListEl.addEventListener("drag", (event) => {
		//console.log("drag");
	});
}

/**
 * dragend
 *
 */
function dragendEvent() {
	dragListEl.addEventListener("dragend", (event) => {
		console.log("dragend");
	});
}

/**
 * dragenter
 *
 */
function dragenterEvent() {
	dropListEl.addEventListener("dragenter", (event) => {
		event.dataTransfer.dropEffect = "move";
		console.log("dragenter");
	});
}

/**
 * dragover
 *
 */
function dragoverEvent() {
	dropListEl.addEventListener("dragover", (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
		console.log("dragover");
	})
}

/**
 * dragleave
 *
 */
function dragleaveEvent() {
	dropListEl.addEventListener("dragleave", (event) => {
		console.log("dragleave");
	});
}

/**
 * drop
 *
 */
function dropEvent() {
	dropListEl.addEventListener("drop", (event) => {
		// dragEl.parentNode.removeChild(dragEl);
		//event.target.appendChild(dragEl);
		event.preventDefault();
		let files = event.dataTransfer.files;
		console.log(files);
		console.log("drop");
	});
}

export default {
	init
};