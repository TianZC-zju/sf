
const deepClone = (variable, cache)=>{
    if(!cache){
        cache = new Map()
    }
    if(!(variable instanceof Object)){
        return variable;
    }
    //有缓存直接返回
    if(cache.has(variable)){
        return  cache.get(variable)
    }
    let result

    if(variable instanceof Function){
        if(variable.prototype){
            result  = function(...props){variable.call(this,...props )}
        }else{
            result=  (...props)=>variable.call(undefined,...props )
        }
    }else if(variable instanceof Date){
        result  = new Date(variable - 0)
    }else if(variable instanceof RegExp){
        result = new RegExp(variable.pattern, variable.flags);
    }else if(variable instanceof Array){
        result = []
    }else{
        result = {}
    }
    cache.set(variable, result)
    // 便利其他属性， 避免原型
    for(let key in variable){
        if(variable.hasOwnProperty(key)){
            result[key] = deepClone(variable[key],cache);
        }
    }
    return result

}
const a = {
    number:1, bool:false, str: 'hi', empty1: undefined, empty2: null,
    array: [
        {name: 'frank', age: 18},
        {name: 'jacky', age: 19}
    ],
    date: new Date(2000,0,1,20,30,0),
    regex: /\.(j|t)sx/i,
    obj: { name:'frank', age: 18},
    f1: (a, b) => a + b,
    f2: function(a, b) { return a + b }
}
a.self = a

const b = deepClone(a)
console.log(b);

b.self === b // true
b.self = 'hi'
a.self !== 'hi' //true