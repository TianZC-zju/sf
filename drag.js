let isDragging = false;
let position = [];

xxx.addEventListener('mousedown',(e)=>{
    isDragging = true;
    position = [e.clientX, e.clientY]
})

document.addEventListener('mousemove',(e)=>{
    //判断是否在拖拽中
    if(!isDragging) return;

    //更新xxx 的left ， top
    let [deltaX, deltaY] = [e.clientX - position[0] , e.clientY - position[1]]
    xxx.style.left = deltaX + parseInt(xxx.style.left || 0) + 'px'
    xxx.style.top = deltaY + parseInt(xxx.style.top || 0) + 'px'

    // 更新position
    position = [e.clientX, e.clientY]
})

document.addEventListener('mouseup',(e)=>{
    isDragging = true;
})

