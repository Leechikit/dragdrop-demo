# HTML Drag and Drop API

## Events

### 绑定在被拖拽的元素
| Evnet        | Description                                       |
| ------------ | ------------------------------------------------- |
| dragstart    | 当用户开始拖拽一个元素或者一个文本选取区块的时触发。|
| drag         | 当用户正在拖拽一个元素或者一个文本选取区块的时触发。|
| dragend      | 当用户结束拖拽一个元素或者一个文本选取区块的时触发。（如放开鼠标按键或按下键盘的 escap 键）|

### 绑定在放置目标
| Event        | Description                                       |
| ------------ | ------------------------------------------------- |
| dragenter    | 当一个元素或文字选取区块被拖曳移动进入一个有效的放置目标时触发。|
| dragover     | 当一个元素或文字选取区块被拖曳移动经过一个有效的放置目标时触发。|
| dragleave    | 当一个元素或文字选取区块被拖曳移动离开一个有效的放置目标时触发。|
| dragexist    | 当一个元素不再是被选取中的拖曳元素时触发。（Firefox能触发，触发顺序：dragexist->dragleave->drop；Chrome无法触发）|
| drop         | 当一个元素或文字选取区块被放置至一个有效的放置目标时触发。|
