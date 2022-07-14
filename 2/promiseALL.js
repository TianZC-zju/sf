Promise.myAll = (promises) => {
    let count = 0;
    let result = [];

    return new Promise((resolve, reject) => {
        promises.forEach((promise,index) => {
            promise.then((value) => {
                count += 1;
                result[index] = value
                if(count >= promises.length){
                    resolve(result)
                }
            }, reason => reject(reason));
        });
    });
};


Promise.myAll([promis1, promis2]).then((value) => {
}, (reason) => {
});