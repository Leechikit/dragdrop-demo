/**
 * @name: dropEffect
 * @description: 放置效果
 * @author: lizijie
 * @update: 
 */
// 拖拽列表
let dragListEl = document.querySelector('.demo-box-3 .drag-list');
// 放置目标
let dropZoneEl = document.querySelector('.demo-box-3 .drop-zone');
// 选择effectAllowed
let selectEffectAllowedEl = document.querySelector('.demo-box-3 .select-effectAllowed');
// 选择dropEffect
let selectDropEffectEl = document.querySelector('.demo-box-3 .select-dropEffect');
// 缓存effectAllowed
let effectAllowed = 'none';
// 缓存dropEffect
let dropEffect = 'none';

/**
 * 初始化
 *
 */
function init() {
	dragstartEvent();
	dragenterEvent();
	dragoverEvent();
	dropEvent();
	selectEffectAllowedEvent();
	selectDropEffectEvent();
}

/**
 * dragstart
 *
 */
function dragstartEvent() {
	dragListEl.addEventListener("dragstart", (event) => {
		event.dataTransfer.effectAllowed = effectAllowed;
		event.dataTransfer.setData("text/plain",event.target.getAttribute('data-drag'));
		console.log("dragstart");
	});
}

/**
 * dragenter
 *
 */
function dragenterEvent() {
	dropZoneEl.addEventListener("dragenter", (event) => {
		event.dataTransfer.dropEffect = dropEffect;
		console.log("dragenter");
	});
}

/**
 * dragover
 *
 */
function dragoverEvent() {
	dropZoneEl.addEventListener("dragover", (event) => {
		event.preventDefault();
		console.log("dragover");
	});
}

/**
 * drop
 *
 */
function dropEvent() {
	dropZoneEl.addEventListener("drop", (event) => {
		let dataList = event.dataTransfer.items;
		for (let i = 0, len = dataList.length; i < len; i++) {
			if (dataList[i].kind == "string" && dataList[i].type.match("^text/plain")) {
				dataList[i].getAsString((index) => {
					let elem = document.querySelector('.demo-box-3 [data-drag="' + index + '"]');
					let cloneElem = elem.cloneNode(true);
					dropZoneEl.appendChild(cloneElem);
					// elem.style.visibility = "hidden";
				})
			}
		}
		console.log("drop");
	});
}

/**
 * select effectAllowed
 *
 */
function selectEffectAllowedEvent() {
	selectEffectAllowedEl.addEventListener("change", (event) => {
		let target = event.target;
		let selectEl = target.options[target.selectedIndex];
		effectAllowed = selectEl.value;
		console.log(selectEl.value);
	});
}

/**
 * select dropEffect
 *
 */
function selectDropEffectEvent() {
	selectDropEffectEl.addEventListener("change", (event) => {
		let target = event.target;
		let selectEl = target.options[target.selectedIndex];
		dropEffect = selectEl.value;
		console.log(selectEl.value);
	});
}

export default {
	init
}