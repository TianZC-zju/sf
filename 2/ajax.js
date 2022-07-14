const ajax = (url,method,data,success, fail)=>{
    const request = new XMLHttpRequest();
    request.open(method, url);

    request.onreadystatechange((readyState)=>{
        if(readyState === 4){

            if(request.status >=200 && request.status<300 || request.status === 304){ // 304 的判断不能少
                success(request)
            }else{
                fail(request)
            }

        }
    })

    request.send(data);

}