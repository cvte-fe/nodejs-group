const main = () => {

    setImmediate(() => {
        console.log('01immediate emit!')
    })


    setTimeout(function() {
        console.log('02settimeout emit!')
    }, 0)


    process.nextTick(function() {
        console.log('03nextTick emit!')
    })

    console.log('00main emit!')
}

main()