const uniq = (list)=>{
   if(! (list instanceof Array)){
       throw new Error('Array required')
   }
   let cache = new Map()

    return list.reduce((previousValue, currentValue)=>{
        const currentValueString = JSON.stringify(currentValue)
       if(!cache.has(currentValueString)){
           cache.set(currentValueString, currentValueString)
           previousValue.push(currentValue)
       }
       return previousValue
    },[])
}



console.log(uniq([2,1,{1:1},{1:1},2,3,1, undefined, undefined, ()=>{}, ()=>{}, true, true, false, false,'aa', 'aa',[],[]]));
console.log(uniq('aa'));
