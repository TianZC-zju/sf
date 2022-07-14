
const throttle=(f, mi)=>{
    let cd = false;
    return ()=>{
       if(!cd){
           f()
           cd = true;
           setTimeout(()=>{cd = false}, mi)
       }
    }
}

const throttled = throttle(()=>console.log('a'), 2000)
throttled();
throttled();
setTimeout(()=>throttled(), 3000)

