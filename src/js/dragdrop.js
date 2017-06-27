/**
 * @name: dragdrop
 * @description: 拖拽模块
 * @author: lizijie
 * @update: 
 */

// 节流
import Throttle from './throttle.js';
let throttle = new Throttle();
let throttle2 = new Throttle();
// 拖拽列表
let dragListEl = document.querySelector('.drag-list');
// 放置目标
let dropListEl = document.querySelector('.drop-list');
// 拖拽状态
let dragStatusEl = document.querySelector('.drag-status');
// 放置目标
let dropStatusEl = document.querySelector('.drop-status');

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
		/*setDragImage start*/
		// let img = document.createElement('img');
		// img.src = "../image/draging.png";
		// event.dataTransfer.setDragImage(img, 100, 20);
		/*setDragImage end*/

		let dataList = event.dataTransfer.items;
		console.log(event.dataTransfer)
		dataList.add(event.target.getAttribute('data-drag'), "text/plain");
		console.log("dragstart");
		throttle(() => {
			dragStatusEl.innerHTML = "dragstart";
		});
	});
}

/**
 * drag
 *
 */
function dragEvent() {
	dragListEl.addEventListener("drag", (event) => {
		console.log("drag");
		throttle(() => {
			dragStatusEl.innerHTML = "drag";
		});
	});
}

/**
 * dragend
 *
 */
function dragendEvent() {
	dragListEl.addEventListener("dragend", (event) => {
		let dataList = event.dataTransfer.items;
		dataList.clear();
		console.log("dragend");
		throttle(() => {
			dragStatusEl.innerHTML = "dragend";
		}, true);
	});
}

/**
 * dragenter
 *
 */
function dragenterEvent() {
	dropListEl.addEventListener("dragenter", (event) => {
		console.log("dragenter");
		throttle2(() => {
			dropStatusEl.innerHTML = "dragenter";
		});
	});
}

/**
 * dragover
 *
 */
function dragoverEvent() {
	dropListEl.addEventListener("dragover", (event) => {
		event.preventDefault();
		console.log("dragover");
		throttle2(() => {
			dropStatusEl.innerHTML = "dragover";
		});
	});
}

/**
 * dragleave
 *
 */
function dragleaveEvent() {
	dropListEl.addEventListener("dragleave", (event) => {
		console.log("dragleave");
		throttle2(() => {
			dropStatusEl.innerHTML = "dragleave";
		}, true);
	});
}

/**
 * drop
 *
 */
function dropEvent() {
	dropListEl.addEventListener("drop", (event) => {
		let dataList = event.dataTransfer.items;
		for (let i = 0, len = dataList.length; i < len; i++) {
			if (dataList[i].kind == "string" && dataList[i].type.match("^text/plain")) {
				dataList[i].getAsString((index) => {
					let elem = document.querySelector('[data-drag="' + index + '"]');
					dropListEl.appendChild(elem);
				})
			}
		}

		console.log("drop");
		throttle2(() => {
			dropStatusEl.innerHTML = "drop";
		}, true);
	});
}

export default {
	init
};