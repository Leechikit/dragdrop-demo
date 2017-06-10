/**
 * @name: dragdropFiles
 * @description: 拖放文件
 * @author: lizijie
 * @update: 
 */

const filesZoneEl = document.querySelector('.drop-files-zone');
const filesListEl = document.querySelector('.files-list');
let filesList = [];

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
	filesZoneEl.addEventListener("dragenter", (event) => {
		filesZoneEl.style.opacity = 0.5;
	});
}

/**
 * dragover event handle
 *
 */
function dragoverEvent() {
	filesZoneEl.addEventListener("dragover", (event) => {
		event.preventDefault();
	})
}

/**
 * dragleave event handle
 *
 */
function dragleaveEvent() {
	filesZoneEl.addEventListener("dragleave", (event) => {
		filesZoneEl.style.opacity = 1;
	});
}

/**
 * drop event handle
 *
 */
function dropEvent() {
	filesZoneEl.addEventListener("drop", (event) => {
		event.preventDefault();
		let files = event.dataTransfer.files;
		filesZoneEl.style.opacity = 1;
		for (let i = 0, len = files.length; i < len; i++) {
			let liEl = document.createElement("li");
			liEl.innerHTML = files[i].name;
			filesList.push(files[i]);
			filesListEl.appendChild(liEl);
		}
	});
}

export default {
	init
}