// index.js
// const addon = require('bindings')('callc_fibo')
const addon = require('./build/Release/addon')

const fibo = x => {
    if (x == 1) {
      return 1;
    } else if (x == 0) {
      return 0;
    } else {
      return fibo(x - 1) + fibo(x - 2);
    }
}

const timeWrap = (func, name) => {
    console.time(name)
    const res = func()
    console.timeEnd(name)
    console.log(res)
}

const main = () => {
    timeWrap(() => addon.fibo(40), 'fiboC')
    timeWrap(() => fibo(40), 'fiboJS')
}

main()