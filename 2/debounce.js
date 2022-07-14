
const debounced = (fn,ms)=>{
    let timer = null;
    return(...props)=>{
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn(...props)
            timer = null
        }, ms)
    }
}





const debouncedFn = debounced(()=>console.log('aa'), 2000)
debouncedFn()
debouncedFn()
setTimeout(() => debouncedFn(), 3000);
