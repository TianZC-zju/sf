const ajax =(method, url,data, success, fail )=>{// 这里错误
   const request =  new XMLHttpRequest()
   request.open(method, url);
   request.onreadystatechange = ()=>{
       if(request.readyState === 4){
           if(request.status >=200 && request.status < 300 || request.status === 304) {// 这里错误
               success(request) // 这里错误
           }else  {
               fail(request)
           }
       }
   }

  request.send(data)// 这里错误
}