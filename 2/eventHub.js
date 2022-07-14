const eventHub = {
    queueMap: {},
    on:(eventType,fn)=>{
        eventHub.queueMap[eventType] ||= []
        eventHub.queueMap[eventType].push(fn)
    },
    off:(eventType,fn)=>{
        eventHub.queueMap[eventType] ||= []
        const index = eventHub.queueMap[eventType].indexOf(fn)// 粗心
        if(index>=0){
            eventHub.queueMap[eventType].splice(index,1)
        }
    },
    emit:(eventType)=>{
        const fnArray = eventHub.queueMap[eventType] || []
        fnArray.forEach(fn=>fn())
    },
}


const logFn = ()=>console.log('1')

eventHub.on('click', logFn);
eventHub.on('click', ()=>console.log('2'))
eventHub.emit('click');

console.log('------');
eventHub.off('click', logFn);
eventHub.emit('click');




