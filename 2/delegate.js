const delegate = (element, eventType, selector, fn) => {
    element.addEventListener(eventType,(event)=>{
        let success = false;
        let el = event.target

        //往上循环遍历
        while(el && !success ){

            // 找到element 就失败跳出
            if(el === element){
                success = false;
                break
            }

            // 找到selector 就成功跳出
            if(el.matches(selector)){
                success = true;
                break
            }
            // 更新el 父节点
           el = el.parentNode
        }

        // 成功就执行fn
       if(success) fn()
    })
};


delegate(element, 'click', 'li', fn);
