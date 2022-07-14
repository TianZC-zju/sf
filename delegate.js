const delegate=(parentElement, eventType, selector, fn)=>{
    if(!(fn instanceof Function)){
        throw new Error(`Function required, but get ${fn}`)
    }
    let isDelegate = false;
    // parent添加监听
    parentElement.addEventListener(eventType,event=>{

        // 拿到target
        let el = event.target


        //只要element存在就循环
        while(!isDelegate && el){

            // 找到 child 就成功退出循环
            if(el.matches(selector)){
                isDelegate = true;
                break;
            }

            // 找到 parentElement就失败退出循环
            if(el === parentElement){
                isDelegate = false;
                break;
            }

            //都没有找到，更新el
            el = el.parentNode;


        }


        // 判断以及执行fn
       isDelegate && fn()
    })

}

delegate(ul, 'click', 'li', ()=>console.log('hah '))


