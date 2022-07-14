const add=(a, b)=>{
    let overflow = false;
    let maxLength = Math.max(a.length, b.length)
    let sum = ''

    // 从末尾开始遍历
    for(let i =1;i<=maxLength;i++){
        // 两个数相加，再加上后面overflow
        let ai = parseInt(a[a.length-i] || '0')
        let bi = parseInt(b[b.length-i] || '0')
        let ci = ai + bi + (overflow? 1 : 0) // 三元表达式一定要加（）

        // 更新overflow
        overflow = ci >= 10

        // 更新两数之和
        ci = overflow? ci-10 : ci
        sum = JSON.stringify(ci) + sum
    }

    // 最后判断overflow，有必要再加1
    sum = overflow? '1'+ sum: sum

    return sum

}


console.log(add('11111111111111111111111111111', '1111111111111111111111111119999'))