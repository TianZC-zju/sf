const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => { //这里
    console.log(values);
});

Promise.prototype.myAll  //这里注意,这里是错误的

// 先写输入和返回，先写含义，再去修改。

Promise.myAll = function (promises){
    let successResult = []
    let successCount = 0

    return new Promise((resolve, reject)=>{
        promises.map((promise, index)=>{
            promise.then((result)=>{
                successResult[index]= result
                successCount += 1
                if(successCount >= promises.length) resolve(successResult) // 这里注意
            }, reason => reject(reason))  //这里注意
        })
    })
}
