const fs = require('fs')

const main = () => {
    const count = 3000
    const path = './testPath/'

    console.time('sync')
    for (let i = 0; i < count; i ++) {
        fs.writeFileSync(path + `${Math.random()}.json`, '{key: 123}')
    }
    console.timeEnd('sync')
    
    console.time('async')
    let endCount = 0
    const cb = () => {
        // console.log('writed!')
        endCount++
        if (endCount === count) {
            console.timeEnd('async')
        }
    }
    for (let i = 0; i < count; i ++) {
        fs.writeFile(path + `${Math.random()}.json`, '{key: 123}', cb)
    }
}


main()