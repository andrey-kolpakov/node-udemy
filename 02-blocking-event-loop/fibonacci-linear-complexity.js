// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

//Топ по скорости и без ошибок
function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }

    let fib1 = 0
    let fib2 = 1
    let sum

    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2
        fib1 = fib2
        fib2 = sum
    }

    return sum
}

console.log(fib(10000))
