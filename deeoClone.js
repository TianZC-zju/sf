const deepClone =(a, cache)=>{
   if(!cache) {
       cache = new Map()
   }

    if(a instanceof Object){
        if(cache.get(a)){
            return cache.get(a)
        }
        let result = {}
        //函数
       if(a instanceof Function){
           //普通函数
           if(a.prototype){
               result= function (...arguments){return a.apply(this, arguments)}
           //箭头函数
           }else{
               result=  (...arguments)=>{return a.apply(undefined, arguments)}
           }

       //数组
       } else if(a instanceof Array ){
            result =[] //这里很精髓

       //Date
       }else if(a instanceof Date){
            result = new Date(a-0)

       //正则
       }else if(a instanceof RegExp){
            result = new RegExp(a.source, a.flags)
       }

       cache.set(a, result)
       for(const key in a){
           if(a.hasOwnProperty(key)){
               result[key] = deepClone(a[key], cache)
           }
       }

      return result;
    }else{
        return a
    }
}