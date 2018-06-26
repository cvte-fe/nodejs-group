// index.js
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

const fiboC = num => {
    console.time('fibo: c++')
    const res = addon.fibo(40)
    console.timeEnd('fibo: c++')
    console.log(res)
}

const fiboJS = num => {
    console.time('fibo: js')
    const res = fibo(40)
    console.timeEnd('fibo: js')
    console.log(res)
}

const main = () => {
    fiboC(40)
    fiboJS(40)
}

main()