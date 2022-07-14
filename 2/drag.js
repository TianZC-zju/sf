let isDragging = false;
let position = [];


xxx.addEventListener('mousedown',e=>{
   isDragging = true;
   position = [e.clientX, e.clientY]
})

document.addEventListener('mouseup',e=>{
    isDragging = false;
    position = [];
})

document.addEventListener('mousemove',e=>{
    if(!isDragging){
        return
    }
    const [deltaX, deltaY] = [e.clientX - position[0], e.clientY - position[1]]
    const [newLeft, newTop] = [parseInt(xxx.style.left || 0) + deltaX + 'px', parseInt(xxx.style.top || 0) + deltaY + 'px']
    [xxx.style.left, xxx.style.top] = [newLeft, newTop]
    position = [e.clientX, e.clientY] // 这里有问题
})
