// node --print-bytecode uint8Array.js > uint8Array.log

const count = 9999999

const fast = () => {
    const name = 'fast'
    console.time(name)
    const arr = new Uint8Array(count)
    for(let i = 0; i < count; i ++) {
        arr[i] = i
    }
    console.timeEnd(name)
}

const slow = () => {
    const name = 'slow'
    console.time(name)
    const arr = []
    for(let i = 0; i < count; i ++) {
        arr[i] = i
    }
    console.timeEnd(name)
}

const verySlow = () => {
    const name = 'verySlow'
    console.time(name)
    const arr = []
    for(let i = 0; i < count; i ++) {
        arr.push(i)
    }
    console.timeEnd(name)
}

fast()
slow()
verySlow()