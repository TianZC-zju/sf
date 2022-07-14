const eventHub = {
    queueMap:{},
    on:(name, fn)=>{
        if(typeof name !== 'string'){
            throw new Error(`string required ,but get ${name}`)
        }

        if(!(fn instanceof Function)){
            throw new Error(`Function required ,but get ${fn}`)
        }
        eventHub.queueMap[name] = eventHub.queueMap[name] || []
        eventHub.queueMap[name].push(fn)
    },
    off:(name, fn)=>{
        if(typeof name !== 'string'){
            throw new Error(`string required ,but get ${name}`)
        }
        const index = eventHub.queueMap[name]?.indexOf(fn)
        if(index < 0){
            return;
        }
        eventHub.queueMap[name]?.splice(index, 1)

    },
    emit:(name,...props)=>{
       if(!eventHub.queueMap[name]) {
           throw new Error(`${name} not found`)
       }
       const q = eventHub.queueMap[name]
        q.forEach(f=>f.call(null,...props))
    },
    reset:()=>{
        eventHub.queueMap = {}
    }
}

const logB = ()=>console.log('b')

eventHub.on('click',(a)=>console.log(a))
eventHub.on('click',logB)
// eventHub.on('click','a')
// eventHub.emit('click','a')
// eventHub.emit('click','C')
// eventHub.emit('click2','C')

eventHub.off('click', logB)
// eventHub.off('click2')

eventHub.emit('click','a')
// eventHub.emit('click','C')
eventHub.on('click',(a)=>console.log(a))
// setTimeout(()=>eventHub.emit('click','a'), 1000)
