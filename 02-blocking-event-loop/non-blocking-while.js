const fs = require('fs')

let isRunning = true

setTimeout(() => {
    isRunning = false
    console.log('Timeout used')
}, 5)
process.nextTick(() => console.log('Next tick'))

//Возвращая resolve из setImmediate, мы просто завершим промис
function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            console.log('Set imediate promise')

            //// Если мы не делаем setImmediate, а просто возвращаем отсюда resolve, то синхронный код продолжает исполняться и мы не переходим на следующую итерацию events loop, в таком случае, цикл не прекращается
            return resolve()
        })
    })
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...')

        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log('While loop ended'))
