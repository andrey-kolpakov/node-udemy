const fs = require('fs')
const dns = require('dns')

function info(text) {
    console.log(text, performance.now().toFixed(2))
}

info('Program start')

//Timeouts
setTimeout(() => {
    info('Timeout 1')
}, 0)

setTimeout(() => {
    process.nextTick(() => info('Next tick from setTimeout'))

    info('Timeout 2')
}, 100)

//Close events
//Колбэк будет выполнен тогда, когда закончится событие
fs.writeFile('./test.txt', 'Hello Node.js', () => {
    info('File written')
})

//Promises
Promise.resolve().then(() => {
    info('Promise 1')
})

Promise.resolve().then(() => {
    info('Promise 2')
})

//Next tick
process.nextTick(() => {
    info('Next tick text')
})

//setImmediate (Check)
setImmediate(() => {
    info('Immediate 1')
})

//Intervals
let IntervalCount = 0
const interval = setInterval(() => {
    info(`Interval ${(IntervalCount += 1)}`,)
    if (IntervalCount === 5) {
        clearInterval(interval)
    }
}, 50)

//Input/output events (I/O)
dns.lookup('google.com', (error, adress, family) => {
    info('DNS 1 google.com')
    Promise.resolve().then(() => info('Promise 3'))
})

info('Program end')
