const antiShake = (f, ms)=>{
    let timer = undefined;
    return()=>{
        if(typeof timer !== 'undefined'){
           clearTimeout(timer)// 这里错误
        }
        timer = setTimeout(()=>{
            f()
            timer = undefined;
        }, ms)
    }
}


const throttled = antiShake(()=>console.log('a'), 2000)
throttled();
throttled();
setTimeout(()=>throttled(), 3000)
